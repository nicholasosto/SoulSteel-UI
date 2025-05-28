import Net from "@rbxts/net";
import { ResourceBarsDTO } from "shared/DTO";

/* Resource Remotes */
export const ResourceRemotes = Net.CreateDefinitions({
	/* Functions */
	GetResources: Net.Definitions.ServerAsyncFunction<() => ResourceBarsDTO>(), // Client requests to get the resources
	/* Events */
	UpdatePlayerResources: Net.Definitions.ServerToClientEvent<[resourceData: ResourceBarsDTO]>(), // Server sends resource data to the client
});
