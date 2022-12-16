/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { FileServers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClient } from "../storSimpleManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FileServer,
  FileServersListByDeviceOptionalParams,
  FileServersListByDeviceResponse,
  Metrics,
  FileServersListMetricsOptionalParams,
  FileServersListMetricsResponse,
  MetricDefinition,
  FileServersListMetricDefinitionOptionalParams,
  FileServersListMetricDefinitionResponse,
  FileServersListByManagerOptionalParams,
  FileServersListByManagerResponse,
  FileServersGetOptionalParams,
  FileServersGetResponse,
  FileServersCreateOrUpdateOptionalParams,
  FileServersCreateOrUpdateResponse,
  FileServersDeleteOptionalParams,
  FileServersBackupNowOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FileServers operations. */
export class FileServersImpl implements FileServers {
  private readonly client: StorSimpleManagementClient;

  /**
   * Initialize a new instance of the class FileServers class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimpleManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the file servers in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<FileServer> {
    const iter = this.listByDevicePagingAll(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByDevicePagingPage(
          deviceName,
          resourceGroupName,
          managerName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByDeviceOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<FileServer[]> {
    let result: FileServersListByDeviceResponse;
    result = await this._listByDevice(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByDeviceOptionalParams
  ): AsyncIterableIterator<FileServer> {
    for await (const page of this.listByDevicePagingPage(
      deviceName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the file server metrics.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetrics(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics> {
    const iter = this.listMetricsPagingAll(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listMetricsPagingPage(
          deviceName,
          fileServerName,
          resourceGroupName,
          managerName,
          options,
          settings
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricsOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<Metrics[]> {
    let result: FileServersListMetricsResponse;
    result = await this._listMetrics(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics> {
    for await (const page of this.listMetricsPagingPage(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves metric definitions of all metrics aggregated at the file server.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetricDefinition(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionPagingAll(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listMetricDefinitionPagingPage(
          deviceName,
          fileServerName,
          resourceGroupName,
          managerName,
          options,
          settings
        );
      }
    };
  }

  private async *listMetricDefinitionPagingPage(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricDefinitionOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result: FileServersListMetricDefinitionResponse;
    result = await this._listMetricDefinition(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionPagingAll(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionPagingPage(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the file servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByManagerOptionalParams
  ): PagedAsyncIterableIterator<FileServer> {
    const iter = this.listByManagerPagingAll(
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByManagerPagingPage(
          resourceGroupName,
          managerName,
          options,
          settings
        );
      }
    };
  }

  private async *listByManagerPagingPage(
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByManagerOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<FileServer[]> {
    let result: FileServersListByManagerResponse;
    result = await this._listByManager(resourceGroupName, managerName, options);
    yield result.value || [];
  }

  private async *listByManagerPagingAll(
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByManagerOptionalParams
  ): AsyncIterableIterator<FileServer> {
    for await (const page of this.listByManagerPagingPage(
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the file servers in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByDeviceOptionalParams
  ): Promise<FileServersListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Returns the properties of the specified file server name.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersGetOptionalParams
  ): Promise<FileServersGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, fileServerName, resourceGroupName, managerName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param fileServer The file server.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    fileServer: FileServer,
    options?: FileServersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FileServersCreateOrUpdateResponse>,
      FileServersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FileServersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        fileServer,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param fileServer The file server.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    fileServer: FileServer,
    options?: FileServersCreateOrUpdateOptionalParams
  ): Promise<FileServersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      fileServer,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, fileServerName, resourceGroupName, managerName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Backup the file server now.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginBackupNow(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersBackupNowOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { deviceName, fileServerName, resourceGroupName, managerName, options },
      backupNowOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Backup the file server now.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginBackupNowAndWait(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersBackupNowOptionalParams
  ): Promise<void> {
    const poller = await this.beginBackupNow(
      deviceName,
      fileServerName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the file server metrics.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetrics(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricsOptionalParams
  ): Promise<FileServersListMetricsResponse> {
    return this.client.sendOperationRequest(
      { deviceName, fileServerName, resourceGroupName, managerName, options },
      listMetricsOperationSpec
    );
  }

  /**
   * Retrieves metric definitions of all metrics aggregated at the file server.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetricDefinition(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricDefinitionOptionalParams
  ): Promise<FileServersListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      { deviceName, fileServerName, resourceGroupName, managerName, options },
      listMetricDefinitionOperationSpec
    );
  }

  /**
   * Retrieves all the file servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByManagerOptionalParams
  ): Promise<FileServersListByManagerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, options },
      listByManagerOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileServer
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.fileServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FileServer
    },
    201: {
      bodyMapper: Mappers.FileServer
    },
    202: {
      bodyMapper: Mappers.FileServer
    },
    204: {
      bodyMapper: Mappers.FileServer
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.fileServer,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.fileServerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.fileServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const backupNowOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/backup",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.fileServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.fileServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/metricsDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.fileServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/fileservers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
