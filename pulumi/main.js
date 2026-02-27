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

const subnetName = [env,"pulumi", "subnet"].join("-")

const subnet = new oci.core.Subnet(subnetName, {
    compartmentId: "ocid1.compartment.oc1..aaaaaaaaobaun32a3g33zrxxfkyzd45yjcyitytupn2vkper5waxhyk55ppa",
    vcnId: "ocid1.vcn.oc1.eu-marseille-1.amaaaaaawk6crziatv2ifcvygfakkzbshyjr53u5uhd25ge2tkhr35yzbf5q",
    displayName: "first-pulumi-subnet",
    definedTags: tags,
    cidrBlock: "10.0.1.0/24",
});
exports.compartmentId = compartment.id
exports.subnetId = subnet.id