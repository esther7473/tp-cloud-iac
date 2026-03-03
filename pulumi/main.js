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
    // definedTags: tags,
    cidrBlock: "10.0.1.0/24",
});


const InstanceName = [env,"pulumi", "instance"].join("-")

// const instanceResource = new oci.core.Instance(InstanceName, {
//     // availabilityDomain: "string",
//     compartmentId: "ocid1.compartment.oc1..aaaaaaaaobaun32a3g33zrxxfkyzd45yjcyitytupn2vkper5waxhyk55ppa",
//     capacityReservationId: "string",
//     createVnicDetails: {
//         assignIpv6ip: false,
//         assignPrivateDnsRecord: false,
//         assignPublicIp: "string",
//         definedTags: {
//             string: "string",
//         },
//         displayName: "string",
//         freeformTags: {
//             string: "string",
//         },
//         hostnameLabel: "string",
//         ipv6addressIpv6subnetCidrPairDetails: [{
//             ipv6address: "string",
//             ipv6subnetCidr: "string",
//         }],
//         nsgIds: ["string"],
//         privateIp: "string",
//         securityAttributes: {
//             string: "string",
//         },
//         skipSourceDestCheck: false,
//         subnetCidr: "string",
//         subnetId: "string",
//         vlanId: "string",
//     },
//     dedicatedVmHostId: "string",
//     definedTags: {
//         string: "string",
//     },
//     displayName: "string",
//     extendedMetadata: {
//         string: "string",
//     },
//     faultDomain: "string",
//     freeformTags: {
//         string: "string",
//     },
//     instanceConfigurationId: "string",
//     ipxeScript: "string",
//     launchVolumeAttachments: [{
//         type: "string",
//         device: "string",
//         displayName: "string",
//         encryptionInTransitType: "string",
//         isAgentAutoIscsiLoginEnabled: false,
//         isPvEncryptionInTransitEnabled: false,
//         isReadOnly: false,
//         isShareable: false,
//         launchCreateVolumeDetails: {
//             sizeInGbs: "string",
//             volumeCreationType: "string",
//             compartmentId: "string",
//             displayName: "string",
//             kmsKeyId: "string",
//             vpusPerGb: "string",
//         },
//         useChap: false,
//         volumeId: "string",
//     }],
//     metadata: {
//         string: "string",
//     },

//     shape: "string",
//     shapeConfig: {
//         baselineOcpuUtilization: "string",
//         gpuDescription: "string",
//         gpus: 0,
//         localDiskDescription: "string",
//         localDisks: 0,
//         localDisksTotalSizeInGbs: 0,
//         maxVnicAttachments: 0,
//         memoryInGbs: 0,
//         networkingBandwidthInGbps: 0,
//         nvmes: 0,
//         ocpus: 0,
//         processorDescription: "string",
//         resourceManagement: "string",
//         vcpus: 0,
//     },
//     sourceDetails: {
//         sourceType: "string",
//         bootVolumeSizeInGbs: "string",
//         bootVolumeVpusPerGb: "string",
//         instanceSourceImageFilterDetails: {
//             compartmentId: "string",
//             definedTagsFilter: {
//                 string: "string",
//             },
//             operatingSystem: "string",
//             operatingSystemVersion: "string",
//         },
//         isPreserveBootVolumeEnabled: false,
//         kmsKeyId: "string",
//         sourceId: "string",
//     },
//     state: "string",
//     updateOperationConstraint: "string",
// });


const BucketName = [env,"pulumi", "bucket"].join("-")
const bucketNamespace = [env,"pulumi", "bucket","ns"].join("-")
const bucket = new oci.objectstorage.Bucket("BucketName", {
    compartmentId: compartment.id,
    name: BucketName,
    namespace: bucketNamespace,
    freeformTags: tags,
});

exports.compartmentId = compartment.id
exports.subnetId = subnet.id
exports.bucketId = bucket.id