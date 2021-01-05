import { getMetadataArgsStorage } from "../";
import { ConnectionNameMetadataArgs } from "../metadata-args/ConnectionNameMetadataArgs";

/**
 * Simple decorator for injecting connection name into the query results (only works for entities)
 */
export function ConnectionName(): PropertyDecorator {
    return function (
        clsOrObject: Function | Object,
        propertyName?: string | symbol
    ) {
        getMetadataArgsStorage().connectionNames.push({
            target: propertyName
                ? clsOrObject.constructor
                : (clsOrObject as Function),
            value: propertyName,
        } as ConnectionNameMetadataArgs);
    };
}
