//const pulumi = require("@pulumi/pulumi")
const oci = require("@pulumi/oci")

const env = "to-be-updated"
console.log("Target environment", env)

const compartmentName = ["pulumi", "tp"].join("-")

const compartment = new oci.identity.Compartment(compartmentName, {
	name: compartmentName,
	description: "Compartment for Pulumi resources",
	enableDelete: true,
})

exports.compartmentId = compartment.id
