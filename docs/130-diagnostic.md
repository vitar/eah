# ⭐ **Estimation & Delivery Diagnostic**

*A structured way to identify where estimation alignment breaks, why drift happens, and how to intervene early.*

---

# **1. Purpose of the Diagnostic**

This diagnostic exists to answer the question:

> **“Where exactly is our estimation system breaking — and what can we do about it?”**

Most projects feel symptoms like:

* slipping timelines
* increased velocity but decreasing predictability
* expanding scope
* chaotic refinement
* late discoveries
* unclear dependencies
* unexpected design/BA/architecture workload
* unclear trade-offs

But without a shared model, teams cannot trace these symptoms back to causes.

This diagnostic gives:

* clarity
* alignment
* a path to action

It supports:

* PMs
* BAs
* PDs
* Architects
* Engineering Managers
* Leads
* Practice Leads
* Directors

---

# **2. How to Use This Diagnostic**

* Run it at **project start**, **post-discovery**, and **every 4–6 weeks**.
* Each area is scored *individually* by key roles (PM, EM, PD, BA, Architect).
* Compare perceptions — misalignment between roles is itself a signal.
* Use results to guide interventions and stakeholder communication.

---

# **3. Diagnostic Overview**

The diagnostic evaluates **four domains**:

1. **Engagement Alignment** (RFP → Discovery)
2. **Delivery Preparedness** (Discovery → Execution)
3. **Execution Health** (Sprints → Outcomes)
4. **Value Realization** (Delivery → Client Value)

Each domain contains **sub-metrics** that map to the complexity/uncertainty model.

---

# **4. Domain 1 — Engagement Alignment**

*(Does our RFP assumption set reflect reality?)*

Score each item **0–3**:

| Score | Meaning                      |
| ----- | ---------------------------- |
| **0** | Severe issue (red)           |
| **1** | Weak alignment (yellow)      |
| **2** | Mostly aligned (light green) |
| **3** | Fully aligned (green)        |

### **Metrics:**

1. **RFP complexity scoring quality**

   * Was complexity scored?
   * Was it done multi-role?

2. **Uncertainty scoring quality**

   * Were unknowns quantified?

3. **Early role involvement**

   * Were PM/BA/PD/Architect part of estimation, not just dev leads?

4. **Assumption clarity & recording**

   * Are assumptions documented and visible?

5. **Feasibility of the proposed team composition**

   * Do assigned roles match complexity?

6. **Client-side dependencies identified?**

   * Or were they ignored?

### **Interpretation:**

* **0–8 points:** High risk — RFP and reality misaligned
* **9–14 points:** Medium risk — recalibration needed
* **15–18 points:** Low risk — good alignment

---

# **5. Domain 2 — Delivery Preparedness**

*(Is discovery turning complexity into clarity?)*

Score each item **0–3**:

1. **Discovery completeness**

   * Are requirements clarified before development?
   * Is there a DoR-upstream model?

2. **Uncertainty burn-down**

   * Are unknowns decreasing over time?
   * Are spikes/PoCs used effectively?

3. **Design readiness**

   * Are UX flows validated before implementation begins?

4. **Architecture clarity**

   * Are integration assumptions validated?
   * APIs mapped? Ownership clear?

5. **BA requirement maturity**

   * Are acceptance criteria complete and stable?

6. **Cross-team dependency clarity**

   * Are SLAs known?
   * Do we have predictable channels?

7. **Complexity baseline updated post-discovery**

   * Does Baseline v2 exist?
   * Does it reflect discovery findings?

### **Interpretation:**

* **0–10 points:** Insufficient discovery → expect significant drift
* **11–16 points:** Partial readiness → watch dependencies
* **17–21 points:** Good readiness
* **22+ points:** Strong, stable foundation

---

# **6. Domain 3 — Execution Health**

*(Are we delivering predictably and transparently?)*

Score each item **0–3**:

1. **Complexity drift tracking**

   * Do we re-score complexity during delivery?
   * Is drift visible?

2. **Story point consistency**

   * Are SP ranges anchored to complexity?
   * No inflation? No gaming?

3. **Backlog health**

   * Does the team have 2–3 sprints ready?
   * Is refinement consistent?

4. **Velocity stability**

   * Is velocity used properly (capacity signal, not performance)?

5. **Dependency management**

   * Are we blocked often?
   * Are external dependencies predictable?

6. **Flow efficiency**

   * Are cycle times consistent with complexity?

7. **Scope control**

   * Are changes captured, scored, and visible to stakeholders?

### **Interpretation:**

* **0–10 points:** Delivery in reactive mode — unstable
* **11–16 points:** Mixed signals — intervene early
* **17–21 points:** Predictable execution
* **22+ points:** Excellent health

---

# **7. Domain 4 — Value Realization**

*(Are we delivering the right things in the right order?)*

Score each item **0–3**:

1. **Value vs. complexity prioritization**

   * Are we sequencing based on impact × cost?

2. **Stakeholder engagement quality**

   * Are decisions transparent and predictable?

3. **Scope trade-offs clarity**

   * Does leadership understand complexity drift?

4. **Outcome alignment**

   * Are delivered increments tied to measurable value?

5. **Predictability of releases**

   * Are release plans stable and credible?

### **Interpretation:**

* **0–6 points:** Low perceived value — major misalignment
* **7–10 points:** Partial value realization
* **11–13 points:** Strong alignment
* **14–15 points:** Very strong alignment

---

# **8. Combined Diagnostic Score**

| Total Score | Meaning                                          |
| ----------- | ------------------------------------------------ |
| **0–40**    | System in conflict mode (HCS + 3SF red zone)     |
| **41–60**   | System in reactive mode — needs structural fixes |
| **61–75**   | System in alignment but with weak spots          |
| **76–90**   | Predictable, value-aligned delivery system       |

This becomes your organization’s **Estimation/Delivery Health Index**.

---

# **9. Diagnostic Patterns (What the Scores Reveal)**

### **Pattern A: High Execution, Low Engagement**

Symptoms:

* Great delivery team
* Bad estimation foundation
* Sprints are healthy, project still slips

Cause:
RFP mismatch + hidden complexity

---

### **Pattern B: High Engagement, Low Delivery**

Symptoms:

* RFP clear
* Discovery good
* Execution chaotic

Cause:
No drift tracking + poor dependency management

---

### **Pattern C: High Discovery, Low Value**

Symptoms:

* Lots of clarity
* Lots of alignment
* But wrong things prioritized

Cause:
No value × complexity prioritization

---

### **Pattern D: Low Everything**

Symptoms:

* Estimation, discovery, delivery, value all unstable

Cause:
System in conflict mode (per HCS)
Needs immediate intervention.

---

# **10. Recommended Interventions (Mapped to 3SF)**

Based on weaknesses:

### **Engagement Line (client ↔ vendor):**

* Re-score complexity at feature level
* Apply uncertainty scoring
* Add PM/BA/PD/Architect to RFP
* Capture assumptions in baseline

### **Delivery Line (vendor ↔ product):**

* Establish baseline v2
* Start drift tracking
* Anchor story points to complexity
* Improve backlog health
* Fix dependencies

### **Value Line (product ↔ client):**

* Use value × complexity matrix
* Clarify sequencing intent
* Present trade-offs using drift numbers
* Align expectations on uncertainty

---

# **11. How This Diagnostic Supports Your Rollout Strategy**

This diagnostic will be used:

### **By Practice Leads**

* to align on estimation culture and expectations

### **By Engineering Directors**

* to assess team health
* to identify systemic issues across portfolios

### **By Project Leads / EMs / PMs**

* during escalations
* during planning resets
* during project reviews
* during quarterly portfolio assessments

### **By Teams**

* during retros
* during sprint boundaries
* during decomposition
* when feeling “lost”
* when feeling pressure

It becomes a shared language for everyone.
