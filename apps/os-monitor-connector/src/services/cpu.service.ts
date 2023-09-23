import os from "node:os";
import { Cpu } from "../../../shared/models/cpu.interface.ts";

async function getCpuCores(): Promise<Cpu[]> {
  try {
    return os.cpus();
  } catch (e) {
    throw e;
  }
}

export default {
  getCpus: getCpuCores,
};