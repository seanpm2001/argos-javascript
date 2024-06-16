import type { Service } from "../types";
import { head, branch, checkIsGitRepository } from "../git";

const service: Service = {
  name: "Git",
  key: "git",
  detect: () => checkIsGitRepository(),
  config: () => {
    return {
      commit: head() || null,
      branch: branch() || null,
      owner: null,
      repository: null,
      jobId: null,
      runId: null,
      runAttempt: null,
      prNumber: null,
      prHeadCommit: null,
      nonce: null,
    };
  },
};

export default service;
