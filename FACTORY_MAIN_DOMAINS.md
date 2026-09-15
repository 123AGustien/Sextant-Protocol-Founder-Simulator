Sextant Protocol™

SRPC Technology Domain Simulator Factory

Complete New Domain Scenario File List

---

1. Protected SRPC Foundation

These files already exist and remain PROTECTED.

research/srpc/srpcKernel.js
research/srpc/srpcRules.js
research/srpc/srpcCompute.js
research/srpc/srpcTest.html

Protection Rule

The SRPC foundation must not be rewritten, replaced, or patched during domain development.

---

2. New Domain — Complete Required File Set

For every new technology domain, create the following complete file set:

research/srpc/ScenarioData.js
research/srpc/Rules.js
research/srpc/ScenarioRules.js
research/srpc/RuleEngine.js
research/srpc/Scenario.js
research/srpc/ScenarioRuleEngine.js
research/srpc/ScenarioEngine.js
research/srpc/DomainIntegration.js
research/srpc/Module.js
research/srpc/Test.html

Each domain is developed independently while using the protected SRPC foundation.

---

3. Main Cockpit Integration

The domain is connected to the main Sextant Protocol™ cockpit additively through:

index.html

The cockpit provides integration and presentation.

The UI does not become the source of decision logic.

---

4. AIMfg Manufacturing — Complete File Set

The AIMfg Manufacturing domain uses the following complete implementation:

research/srpc/aimfgManufacturingScenarioData.js
research/srpc/aimfgManufacturingRules.js
research/srpc/aimfgManufacturingScenarioRules.js
research/srpc/aimfgManufacturingRuleEngine.js
research/srpc/aimfgManufacturingScenario.js
research/srpc/aimfgManufacturingScenarioRuleEngine.js
research/srpc/aimfgManufacturingScenarioEngine.js
research/srpc/aimfgManufacturingDomainIntegration.js
research/srpc/aimfgManufacturingModule.js
research/srpc/aimfgManufacturingTest.html

Domain development remains independent from the Factory "main" branch.

---

5. Biodiesel — Complete File Set

The Biodiesel domain uses the following complete implementation:

research/srpc/biodieselScenarioData.js
research/srpc/biodieselRules.js
research/srpc/biodieselScenarioRules.js
research/srpc/biodieselRuleEngine.js
research/srpc/biodieselScenario.js
research/srpc/biodieselScenarioRuleEngine.js
research/srpc/biodieselScenarioEngine.js
research/srpc/biodieselDomainIntegration.js
research/srpc/biodieselModule.js
research/srpc/biodieselTest.html

Domain development remains independent from the Factory "main" branch.

---

6. Complete Sextant Protocol™ Architecture File Set

6.1 Protected SRPC Foundation

research/srpc/srpcKernel.js
research/srpc/srpcRules.js
research/srpc/srpcCompute.js
research/srpc/srpcTest.html

6.2 Domain Data

research/srpc/ScenarioData.js

6.3 Domain Rules

research/srpc/Rules.js

6.4 Scenario Rule Data

research/srpc/ScenarioRules.js

6.5 Domain Rule Engine

research/srpc/RuleEngine.js

6.6 Domain Scenario

research/srpc/Scenario.js

6.7 Scenario Rule Engine

research/srpc/ScenarioRuleEngine.js

6.8 Scenario Engine

research/srpc/ScenarioEngine.js

6.9 Domain Integration

research/srpc/DomainIntegration.js

6.10 Domain Module

research/srpc/Module.js

6.11 Standalone Validation

research/srpc/Test.html

6.12 Main Cockpit

index.html

---

7. Development Sequence

Each new domain follows this sequence:

1. ScenarioData.js
2. Rules.js
3. ScenarioRules.js
4. RuleEngine.js
5. Scenario.js
6. ScenarioRuleEngine.js
7. ScenarioEngine.js
8. DomainIntegration.js
9. Module.js
10. Test.html
11. Standalone validation
12. index.html integration
13. Domain integration validation
14. Determinism validation
15. Safety-boundary validation
16. Research milestone tag

---

8. Sextant Protocol™ Architecture

The processing architecture is:

DATA
  ↓
ALGORITHMS
  ↓
COMPUTE
  ↓
SCENARIO
  ↓
DECISION
  ↓
HUMAN AUTHORITY
  ↓
SIMULATED ACTION
  ↓
UPDATE

---

9. Sextant Protocol™ Golden Rule

The Golden Rule is:

OBSERVE
  ↓
VERIFY
  ↓
ASSESS
  ↓
DECIDE
  ↓
ACT
  ↓
UPDATE

The Golden Rule governs the complete scenario-processing lifecycle.

---

10. Governance

10.1 Additive Development

New domain development is ADDITIVE ONLY.

10.2 Protected Foundation

Protected SRPC files are not rewritten.

10.3 Validated Domain Files

Validated domain files are not patched.

10.4 Rule Authority

Domain rules remain within the data/rule layer.

10.5 UI Separation

The UI does not become the source of decision logic.

10.6 Simulated Action

"ACT" represents simulated action only.

10.7 Physical Safety Boundary

Physical execution remains disabled.

10.8 Autonomous Safety Boundary

Autonomous actuation remains disabled.

10.9 Human Decision Authority

Human Decision Authority remains final.

10.10 Research Integrity

Research claims must not exceed validated evidence.

10.11 Domain Independence

Each client/domain scenario remains its own independent domain implementation.

10.12 SRPC Role

SRPC remains the reusable resilience-processing research layer.

---

11. Factory Development Principle

The Sextant Protocol™ SRPC Technology Domain Simulator Factory provides a reusable architecture for developing independent technology-domain simulators.

Sextant Protocol™ Factory
        │
        ├── Protected SRPC Foundation
        │
        ├── AIMfg Manufacturing
        │
        ├── Biodiesel
        │
        └── Future Technology Domains

Each domain follows the same protected architecture while maintaining its own:

- Domain data
- Domain rules
- Scenario rules
- Rule engines
- Scenarios
- Scenario rule engines
- Scenario engines
- Domain integration
- Domain module
- Standalone validation

---

12. Factory Branch Principle

The Factory "main" branch represents the master/template/catalogue.

Individual domains are developed independently on their own branches.

Example:

main
 │
 ├── factory/aimfg
 │
 ├── factory/biodiesel
 │
 └── factory/<future-domain>

Domain branches are independent development environments and are not normally merged back into Factory "main".

Factory "main" remains the stable architecture and domain catalogue.

---

13. Domain Development Boundary

Each domain must preserve the following separation:

DOMAIN DATA
     ↓
DOMAIN RULES
     ↓
RULE ENGINE
     ↓
SCENARIO
     ↓
SCENARIO RULE ENGINE
     ↓
SCENARIO ENGINE
     ↓
DOMAIN INTEGRATION
     ↓
MODULE
     ↓
VALIDATION
     ↓
COCKPIT

The protected SRPC foundation remains underneath the domain implementation.

---

14. Safety and Research Boundary

All Sextant Protocol™ SRPC domain simulators remain:

LOCAL
DETERMINISTIC
SIMULATED
RESEARCH-ORIENTED
HUMAN-AUTHORIZED

The system does not provide:

PHYSICAL EXECUTION
AUTONOMOUS ACTUATION
UNCONTROLLED EXTERNAL EXECUTION

Human Decision Authority remains final.

---

15. Final Factory Definition

The Sextant Protocol™ SRPC Technology Domain Simulator Factory is a reusable, additive research architecture for creating independent technology-domain simulators while preserving a protected SRPC foundation, deterministic processing, explicit decision logic, human authority, simulation-only action, and controlled research validation.

Sextant Protocol™ — Additive. Deterministic. Human-authorized. Research-controlled.