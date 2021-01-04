/**
 * ConnectionName properties.
 */
export interface ConnectionNameMetadataArgs {
    /**
     * Class to which discriminator name is applied.
     */
    readonly target: Function | string;

    /**
     * Connection name value.
     */
    readonly value: any;
}
