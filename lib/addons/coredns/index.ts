import { CoreAddOn } from "../core-addon";

/**
 * Implementation of CoreDns EKS add-on.
 */
export class CoreDnsAddOn extends CoreAddOn {

    constructor(version?: string) {
        super({
            addOnName: "coredns",
            version: "v1.8.4-eksbuild.1",
            saName: "coredns"
        });
    }
}
