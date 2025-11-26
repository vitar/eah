# ⭐ **Complexity & Uncertainty Scoring Framework**

*A practical method to quantify scope, detect drift early, and link RFP → Discovery → Delivery.*

---

# **1. Purpose of the Scoring Sheet**

The scoring sheet is the **operational core** of the estimation alignment framework.
It brings consistency and transparency across stages by enabling teams to:

* quantify complexity
* quantify uncertainty
* create an initial estimation baseline
* track complexity & uncertainty drift during delivery
* understand when and why assumptions change
* provide early signals for timeline/budget adjustments
* enable informed trade-off decisions

This sheet becomes the **single source of truth** connecting RFP, discovery, sprint planning, and forecasting.

---

# **2. When the Scoring Sheet Is Used (Lifecycle)**

### **Stage 1 — Pre-sales / RFP**

Used to:

* score high-level features/capabilities
* estimate initial complexity
* estimate uncertainty that impacts costing
* generate PERT ranges
* apply risk multipliers
* create the **Complexity Baseline v1**

### **Stage 2 — Discovery & Design**

Used to:

* re-score complexity with clearer information
* measure uncertainty burn-down
* surface discovery/design workload
* adjust the baseline to **v2**

### **Stage 3 — Delivery**

Used to:

* map complexity to story points
* detect complexity drift
* track uncertainty changes
* adjust forecasts
* give early signals to PM/PL
* maintain **Baseline v3+** as needed

### **Stage 4 — Forecasting & Trade-Offs**

Used for:

* Monte Carlo inputs
* new scope items
* scope reduction analysis
* value/complexity prioritization
* stakeholder communication

---

# **3. What Gets Scored (Granularity Levels)**

Depending on the stage, scoring can occur at:

### **RFP:**

* EPICs
* high-level features
* integration blocks
* capabilities
* non-functional requirement clusters

### **Discovery:**

* decomposed features
* UX flows / screens
* data flows
* API surfaces
* domain logic segments

### **Delivery:**

* stories (when needed)
* slices / increments
* integration tasks
* cross-team dependencies
* scope changes

**Important:** teams should not score every story.
They score **units of meaning** (EPICs/features/slices) — not tasks.

---

# **4. How to Score Complexity (Drivers + Scale)**

All drivers use the same scale:

| Score | Meaning                       |
| ----- | ----------------------------- |
| **0** | Not applicable                |
| **1** | Low complexity                |
| **2** | Medium complexity             |
| **3** | High complexity               |
| **5** | Extreme complexity (red flag) |

The nine recommended drivers:

1. **Integration complexity**
2. **Data complexity**
3. **UI/UX complexity**
4. **Business logic complexity**
5. **Security/compliance requirements**
6. **Non-functional requirements**
7. **Team capability/fit**
8. **External dependencies**
9. **Environment/DevOps maturity**

### **Complexity Score = sum of relevant driver scores**

---

# **5. How to Score Uncertainty**

Same scale (0–5).
Common drivers:

1. Requirements clarity
2. Stakeholder alignment
3. Domain ambiguity
4. Dependency ownership
5. Availability of documentation
6. Need for spikes/PoCs
7. Unpredictable history
8. Cross-team coordination unknowns
9. Client-side processes unknowns

### **Uncertainty Score = sum of uncertainty driver scores**

---

# **6. Creating the Complexity Baseline (RFP → Discovery)**

The baseline is a table of:

| Capability/Feature | Complexity Score | Uncertainty Score | Combined Initial Score | Expected Effort (weeks/FTEs) |

The “expected effort” is generated using:

* complexity multipliers
* uncertainty multipliers
* PERT ranges

This baseline becomes the **agreed assumption set** for RFP.

### **Baseline v1 (RFP):**

* Highest uncertainty
* Coarse-grained features
* Good for costing
* Not accurate enough for planning

### **Baseline v2 (Post-Discovery):**

* Lower uncertainty
* Refined features
* Better complexity accuracy
* Used for delivery planning

### **Baseline v3 (Delivery, optional):**

* Only updated if major complexity drift occurs
* Controls escalation and expectations

---

# **7. Mapping Scores to Delivery (Story Points & Slices)**

The sheet provides a mapping:

| Complexity Score | Interpretation                 | Suggested SP Range |
| ---------------- | ------------------------------ | ------------------ |
| 1–3 (Low)        | Simple                         | 1–3 points         |
| 4–7 (Medium)     | Straightforward but multi-step | 5–8 points         |
| 8–12 (High)      | Difficult or multi-domain      | 13–21 points       |
| 13+ (Extreme)    | Break into smaller slices      | >21 or split       |

This prevents hidden re-estimation and velocity manipulation.

---

# **8. Tracking Complexity Drift (Delivery Stage)**

The scoring sheet includes:

* **Current Complexity Score**
* **Difference vs Baseline**
* **Percentage drift (+/-)**
* **Drift categories** (integration, UX, dependencies, NFRs…)
* **Impact indicators** (timeline, capacity, budget)

### **Example Drift Classification**

| Drift      | Meaning           | Action                                   |
| ---------- | ----------------- | ---------------------------------------- |
| **0–10%**  | Normal variation  | No action needed                         |
| **10–25%** | Manageable drift  | Re-plan slices, inform stakeholders      |
| **25–40%** | Significant drift | Align scope, schedule trade-offs         |
| **40%+**   | Critical drift    | Executive attention, contract adjustment |

This replaces emotional escalations with clear data.

---

# **9. Tracking Uncertainty Burn-Down**

Uncertainty should **decrease** as the project progresses.

The sheet highlights whether it actually does.

### **If uncertainty stays flat:**

Discovery is incomplete → expect rework.

### **If uncertainty increases:**

Hidden risks have surfaced → intervene early.

---

# **10. Sheet Sections (Structure for Final Tool)**

### **Section A — Feature/EPIC List**

* list all items to be estimated
* define granularity level

### **Section B — Complexity Driver Scoring**

* matrix for scoring 1–9 drivers per feature

### **Section C — Uncertainty Driver Scoring**

* matrix for 1–9 uncertainty factors

### **Section D — Combined Score**

* weighted or additive depending on policy

### **Section E — RFP Effort Model**

* multipliers
* FTE + sprint translation
* PERT ranges
* preliminary cost

### **Section F — Delivery Mapping**

* story point ranges
* batch-size implications
* cycle-time projections (optional)

### **Section G — Baseline Comparison & Drift Tracking**

* baseline vs latest
* per-feature drift
* total drift
* drift by driver
* risk classification

### **Section H — Trade-Off Model**

* high-value/low-complexity items
* low-value/high-complexity candidates for removal
* fast-fix clusters
* long-tail clusters

---

# **11. Practical Guidance for Teams**

### **Do not “score everything.”**

Score meaningful units, not tasks.

### **Do not treat complexity as estimation.**

It is a *signal*, not a precise timeline.

### **Re-score when new information arrives.**

Discovery & dependencies change reality.

### **Avoid scoring alone.**

Complexity is multi-role: BA + PD + Architect + EM + Lead.

### **Don’t modify story points to hide drift.**

This sheet makes complexity visible — use it.

---

# **12. How This Sheet Connects to the Overall Framework**

This page operationalizes:

* **Page 1: The Model**
* **Page 2: The Translation Map**

The scoring sheet becomes the **mechanical heart** enabling:

* alignment
* traceability
* drift detection
* realistic forecasting
* transparent value decisions
* better client conversations

It is the missing alignment tool between the three 3SF lines:

* Engagement ↔ Delivery ↔ Value
