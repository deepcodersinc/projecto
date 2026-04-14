#!/usr/bin/env node
import { Command } from "commander";
import { exportDocuments } from "./commands/export";
import { importDocuments } from "./commands/import";

const program = new Command();

program
  .name("outline-cli")
  .description("Command-line utilities for administering an Outline instance")
  .version("0.1.0");

program.command("export").action(exportDocuments);
program.command("import").action(importDocuments);

program.parse();
