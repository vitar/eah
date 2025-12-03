const STORAGE_KEY = 'estimationAlignmentData_v1';

const defaultData = {
  config: {
    complexityDrivers: [
      { key: 'Integration', description: 'Integration points, APIs, upstream/downstream systems' },
      { key: 'Data', description: 'Data models, transformations, data quality, migrations' },
      { key: 'UX', description: 'UI complexity, number of screens, branching flows' },
      { key: 'Logic', description: 'Business rules, edge cases, calculations, workflows' },
      { key: 'SecurityCompliance', description: 'Security, privacy, regulatory or compliance work' },
      { key: 'NFR', description: 'Performance, scalability, availability and other NFRs' },
      { key: 'TeamFit', description: 'Team experience with tech stack and domain' },
      { key: 'ExternalDeps', description: 'External teams/vendors/third parties we depend on' },
      { key: 'EnvDevOps', description: 'Environments, pipelines, deployment, monitoring, tooling' },
    ],
    uncertaintyDrivers: [
      { key: 'ReqClarity', description: 'Clarity and stability of requirements' },
      { key: 'StakeholderAlign', description: 'Agreement between stakeholders on goals and scope' },
      { key: 'DomainAmbiguity', description: 'Unknown business/domain rules or edge cases' },
      { key: 'DepOwnership', description: 'Clarity of ownership for dependencies and integrations' },
      { key: 'DocAvailability', description: 'Availability and quality of specs/docs/references' },
      { key: 'SpikesNeeded', description: 'Need for spikes/PoCs to explore unknowns' },
      { key: 'UnpredictableHistory', description: 'History of surprises, rework, or failures' },
      { key: 'CrossTeamCoord', description: 'Number and unpredictability of cross-team interactions' },
      { key: 'ClientProcess', description: 'Internal client processes (access, approvals, change mgmt)' },
    ],
  },
  features: [],
};

export class App {
  storageKey = STORAGE_KEY;
  scoreScale = [0, 1, 2, 3, 5];
  activeTab = 'getting-started';
  fileInput;

  constructor() {
    this.data = this.loadData();
  }

  loadData() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        return structuredClone(defaultData);
      }
      const parsed = JSON.parse(raw);
      return {
        config: parsed.config || structuredClone(defaultData.config),
        features: parsed.features || [],
      };
    } catch (e) {
      console.error('Failed to load data, using defaults', e);
      return structuredClone(defaultData);
    }
  }

  persist() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  setTab(tab) {
    this.activeTab = tab;
  }

  complexityKey(driver) {
    return `C_${driver.key}`;
  }

  uncertaintyKey(driver) {
    return `U_${driver.key}`;
  }

  addComplexityDriver() {
    this.data.config.complexityDrivers.push({ key: 'C_New', description: '' });
    this.persist();
  }

  addUncertaintyDriver() {
    this.data.config.uncertaintyDrivers.push({ key: 'U_New', description: '' });
    this.persist();
  }

  removeDriver(type, index) {
    const list = type === 'complexity' ? this.data.config.complexityDrivers : this.data.config.uncertaintyDrivers;
    list.splice(index, 1);
    this.persist();
  }

  addFeature() {
    this.data.features.push({
      id: '',
      name: '',
      valueRating: '',
      tshirtSize: '',
      baselineVersion: '',
      status: '',
      complexityScores: {},
      uncertaintyScores: {},
    });
    this.persist();
  }

  computeComplexityTotal(feature) {
    return Object.values(feature.complexityScores || {}).reduce((sum, v) => sum + (Number(v) || 0), 0);
  }

  computeUncertaintyTotal(feature) {
    return Object.values(feature.uncertaintyScores || {}).reduce((sum, v) => sum + (Number(v) || 0), 0);
  }

  complexityBand(total) {
    if (total <= 3) return 'Low';
    if (total <= 7) return 'Medium';
    if (total <= 12) return 'High';
    return 'Extreme';
  }

  bandClass(band) {
    switch (band) {
      case 'Low':
        return 'tag tag-low';
      case 'Medium':
        return 'tag tag-med';
      case 'High':
        return 'tag tag-high';
      case 'Extreme':
        return 'tag tag-extreme';
      default:
        return 'tag';
    }
  }

  percentageDiff(base, current) {
    if (!base) return 0;
    return (current - base) / base;
  }

  snapshotBaseline() {
    const newVersion = window.prompt('Baseline version label (e.g., v1, v2, v3):', 'v2');
    if (!newVersion) return;
    this.data.features.forEach((feature) => {
      const currentCT = this.computeComplexityTotal(feature);
      const currentUT = this.computeUncertaintyTotal(feature);
      feature.baselineVersion = newVersion;
      feature.baselineSnapshot = {
        version: newVersion,
        complexityTotal: currentCT,
        uncertaintyTotal: currentUT,
      };
    });
    this.persist();
  }

  driftFor(feature) {
    const currentCT = this.computeComplexityTotal(feature);
    const currentUT = this.computeUncertaintyTotal(feature);
    const baseline = feature.baselineSnapshot || {
      complexityTotal: currentCT,
      uncertaintyTotal: currentUT,
      version: feature.baselineVersion || '',
    };

    const driftAbs = currentCT - baseline.complexityTotal;
    const driftPct = this.percentageDiff(baseline.complexityTotal, currentCT);
    const uncertDelta = currentUT - baseline.uncertaintyTotal;

    let signal = '';
    if (baseline.complexityTotal > 0 && Math.abs(driftPct) >= 0.25) {
      signal = 'Check complexity drift';
    } else if (uncertDelta > 0) {
      signal = 'Uncertainty increasing';
    }

    return {
      baseline,
      currentCT,
      currentUT,
      driftAbs,
      driftPct,
      uncertDelta,
      signal,
    };
  }

  exportJson() {
    const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
    a.download = `estimation-data-${ts}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  importJson(event) {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (!imported.config || !imported.features) {
          alert('Invalid JSON: expected { config, features }.');
          this.resetFileInput();
          return;
        }
        this.data = imported;
        this.persist();
        alert('Import successful. Data replaced.');
      } catch (err) {
        console.error(err);
        alert('Failed to parse JSON file.');
      } finally {
        this.resetFileInput();
      }
    };
    reader.readAsText(file);
  }

  resetFileInput() {
    if (this.fileInput instanceof HTMLInputElement) {
      this.fileInput.value = '';
    }
  }

  get featuresWithCalculations() {
    return this.data.features.map((feature) => ({
      feature,
      complexityTotal: this.computeComplexityTotal(feature),
      uncertaintyTotal: this.computeUncertaintyTotal(feature),
    }));
  }
}
