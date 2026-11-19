import { Bucket } from "@upstash/blob";

/** Bucket "uspech" de Upstash Blob (privado). Solo para código de servidor. */
export const bucket = Bucket.fromEnv();
