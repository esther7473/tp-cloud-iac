const pulumi = require("@pulumi/pulumi")
const oci = require("@pulumi/oci")


const env = pulumi.getStack();
console.log("Target environment:", env);

// const env = "to-be-updated"
// console.log("Target environment", env)

const compartmentName = [env,"pulumi", "tp"].join("-")


const tags = {
    "created-by": "pulumi",
    "environment": env
};
 
const compartment = new oci.identity.Compartment(compartmentName, {
	name: compartmentName,
	description: "Compartment for Pulumi resources",
	enableDelete: true,
	freeformTags:tags
})



exports.compartmentId = compartment.id

// const esther_pulumi_subnet = new oci.core.Subnet("esther_pulumi_subnet", {
//     compartmentId: "string",
//     vcnId: "string",
//     ipv4cidrBlocks: ["string"],
//     ipv6cidrBlock: "string",
//     dhcpOptionsId: "string",
//     displayName: "string",
//     dnsLabel: "string",
//     freeformTags: {
//         string: "string",
//     },
//     availabilityDomain: "string",
//     definedTags: {
//         string: "string",
//     },
//     ipv6cidrBlocks: ["string"],
//     prohibitInternetIngress: false,
//     prohibitPublicIpOnVnic: false,
//     routeTableId: "string",
//     securityListIds: ["string"],
//     cidrBlock: "string",
// });