# Infrastructure code TP

Pulumi & Terraform are "Infrastructure as Code" tools, used for building, changing, and versioning infrastructure efficiently. It manages cloud services, servers, and other resources through human-readable configuration files that describe the desired state of the infrastructure.

## Structure
The cloud resources are described as code in the `pulumi/main.js` file.

## Initialise the connection with your cloud account

Once you have created your stack, populate it with config fields to let pulumi connect.
You have to get your own values, here is an example:

``` yml
encryptionsalt: v1:adfsf6mUOo=:v1:aw/SRsrBuihVzeJh:LM5emTPRjmlsdug46523dsf7prA==
config:
  oci:tenancyOcid: ocid1.tenancy.oc1..aaaaaaaalwfm7ymd5zo3vptqiferbzgqlskfjgsdliufslkjfg
  oci:userOcid: ocid1.user.oc1..aaaaaaaalyebnodp3qah2dm5kiex2ttjpjmsdkfhdmslgfhmldsukhfyoim
  oci:privateKeyPath: oci_api_key
  oci:fingerprint: g9:89:9a:d6:9b:98:15:87:45:4d:c3:65:gg:b5:sd:f0
  oci:region: eu-paris-1
```


## CI/CD
The pipeline tests if the syntax is correct and gives an overview of the cloud resources that would be created if the code was applied.

Credentials to setup in https://github.com/ < repo > /settings/secrets/actions

```
PULUMI_OCI_API_KEY: the API key for Pulumi to connect to OCI
PULUMI_STACK_CONFIG: the dev stack yaml file
```

They will be consummed by the CI/CD

passphrase : anitchey