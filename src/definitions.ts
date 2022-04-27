export interface FSOnExitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
