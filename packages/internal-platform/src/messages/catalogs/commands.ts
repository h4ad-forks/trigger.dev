import { commands as integrationRequests } from "../schemas/integrationRequests";
import { commands as workflowRuns } from "../schemas/workflowRuns";
import { commands as logs } from "../schemas/logs";
import { commands as customEvents } from "../schemas/customEvents";
import { commands as delays } from "../schemas/delays";
import { commands as fetchRequests } from "../schemas/fetchRequests";
import { commands as runOnce } from "../schemas/runOnce";

const Catalog = {
  ...integrationRequests,
  ...workflowRuns,
  ...logs,
  ...customEvents,
  ...delays,
  ...fetchRequests,
  ...runOnce,
};

export default Catalog;
