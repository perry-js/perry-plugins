import firebase from "firebase";
import { IFirebasePluginConfig } from "./interfaces/firebase-plugin-config";
import { writeToDB } from "./write-to-db";

export default (cfg: IFirebasePluginConfig) => (report: PerryReport) => {
  const basePath = cfg.basePath ? cfg.basePath : "perry_reports";
  const ref = cfg.firebaseApp.database().ref(`${basePath}/${report.id}`);
  writeToDB(ref, cfg.transform ? cfg.transform(report) : report);
};
