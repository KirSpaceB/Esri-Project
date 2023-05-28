import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { createContext } from "react";
export const MapContext = createContext<{ map: Map | null, view: MapView | null } | null>(null)
