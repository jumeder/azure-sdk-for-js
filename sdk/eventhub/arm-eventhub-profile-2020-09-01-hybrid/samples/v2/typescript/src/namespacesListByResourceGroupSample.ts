/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the available Namespaces within a resource group.
 *
 * @summary Lists the available Namespaces within a resource group.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/preview/2018-01-01-preview/examples/NameSpaces/EHNameSpaceListByResourceGroup.json
 */
async function namespaceListByResourceGroup() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "ArunMonocle";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.namespaces.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  namespaceListByResourceGroup();
}

main().catch(console.error);
