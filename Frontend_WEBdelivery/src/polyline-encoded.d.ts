declare module 'polyline-encoded' {
    interface PolylineData {
        points: string;
        levels?: string;
        numLevels?: number;
        zoomFactor?: number;
    }

    interface PolylineUtil {
        encode(points: L.LatLng[] | number[], options?: any): string;
        decode(encoded: string, options?: any): L.LatLng[];
    }

    const polylineUtil: PolylineUtil;
    export = polylineUtil;
}
