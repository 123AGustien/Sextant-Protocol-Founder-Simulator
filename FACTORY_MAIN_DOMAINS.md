Sextant Protocol™ — Complete New Domain Scenario File List
1. Protected SRPC Foundation
These files already exist and remain protected.

research/srpc/srpcKernel.js research/srpc/srpcRules.js research/srpc/srpcCompute.js research/srpc/srpcTest.html

2. New Domain — Complete Required File Set
For every new domain, create these files:

research/srpc/ScenarioData.js research/srpc/Rules.js research/srpc/ScenarioRules.js research/srpc/RuleEngine.js research/srpc/Scenario.js research/srpc/ScenarioRuleEngine.js research/srpc/ScenarioEngine.js research/srpc/DomainIntegration.js research/srpc/Module.js research/srpc/Test.html

3. Main Cockpit Integration
The domain is connected additively through:

index.html

4. AIMfg Manufacturing — Complete File Set
research/srpc/aimfgManufacturingScenarioData.js research/srpc/aimfgManufacturingRules.js research/srpc/aimfgManufacturingScenarioRules.js research/srpc/aimfgManufacturingRuleEngine.js research/srpc/aimfgManufacturingScenario.js research/srpc/aimfgManufacturingScenarioRuleEngine.js research/srpc/aimfgManufacturingScenarioEngine.js research/srpc/aimfgManufacturingDomainIntegration.js research/srpc/aimfgManufacturingModule.js research/srpc/aimfgManufacturingTest.html

5. Biodiesel — Complete File Set
research/srpc/biodieselScenarioData.js research/srpc/biodieselRules.js research/srpc/biodieselScenarioRules.js research/srpc/biodieselRuleEngine.js research/srpc/biodieselScenario.js research/srpc/biodieselScenarioRuleEngine.js research/srpc/biodieselScenarioEngine.js research/srpc/biodieselDomainIntegration.js research/srpc/biodieselModule.js research/srpc/biodieselTest.html

6. Complete Architecture File Set
Protected foundation:

research/srpc/srpcKernel.js research/srpc/srpcRules.js research/srpc/srpcCompute.js research/srpc/srpcTest.html

Domain data:

research/srpc/ScenarioData.js

Domain rules:

research/srpc/Rules.js

Scenario rule data:

research/srpc/ScenarioRules.js

Domain rule engine:

research/srpc/RuleEngine.js

Domain scenario:

research/srpc/Scenario.js

Scenario rule engine:

research/srpc/ScenarioRuleEngine.js

Scenario engine:

research/srpc/ScenarioEngine.js

Domain integration:

research/srpc/DomainIntegration.js

Domain module:

research/srpc/Module.js

Standalone validation:

research/srpc/Test.html

Cockpit:

index.html

7. Development Sequence
ScenarioData.js
Rules.js
ScenarioRules.js
RuleEngine.js
Scenario.js
ScenarioRuleEngine.js
ScenarioEngine.js
DomainIntegration.js
Module.js
Test.html
Standalone validation
index.html integration
Domain integration validation
Determinism validation
Safety-boundary validation
Research milestone tag
8. Architecture
DATA ↓ ALGORITHMS ↓ COMPUTE ↓ SCENARIO ↓ DECISION ↓ HUMAN AUTHORITY ↓ SIMULATED ACTION ↓ UPDATE

9. Golden Rule
OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE

10. Governance
New domain development is ADDITIVE ONLY.

Protected SRPC files are not rewritten.

Validated domain files are not patched.

Domain rules remain in the data/rule layer.

UI does not become the source of decision logic.

ACT represents simulated action only.

Physical execution remains disabled.

Autonomous actuation remains disabled.

Human Decision Authority remains final.

Research claims must not exceed validated evidence.

Each client/domain scenario remains its own domain implementation.

SRPC remains the reusable resilience-processing research layer.