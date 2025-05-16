export enum DeploymentNetwork {
  MAINNET = 'MAINNET',
  TESTNET = 'TESTNET',
  DEVNET = 'DEVNET',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CREATING = 'CREATING',
  UPDATING = 'UPDATING',
  TERMINATING = 'TERMINATING',
}

export enum DeploymentStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  FAILED = 'FAILED',
  STOPPED = 'STOPPED',
  COMPLETED = 'COMPLETED',
}

export enum CloudProvider {
  AWS = 'AWS',
  GCP = 'GCP',
  AZURE = 'AZURE',
}
