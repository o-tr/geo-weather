import type { GeoPosSuggestion } from "@/const/geo-pos-list";

// プロバイダー情報の型
export interface ProviderInfo {
  name: string;              // プロバイダー名/サービス名
  domains: string[];         // 対応ドメイン
  geoIds: GeoPosSuggestion[]; // 対応地域ID
  url?: string;              // 公式サイトURL
  description?: string;      // 説明/備考
  coverage?: string;         // サービス提供エリア（テキスト）
}

// ホスト名パーサー情報の型
export interface HostnameParserInfo {
  name: string;                  // パーサー名/プロバイダー名
  domain: string;                // 対応ドメイン
  regex: RegExp | RegExp[];      // マッチングパターン
  prefixMap: Record<string, GeoPosSuggestion | GeoPosSuggestion[]>;
  fallback?: GeoPosSuggestion[]; // フォールバック地域ID
  description?: string;          // 説明
  parser: (hostname: string) => GeoPosSuggestion[] | undefined; // パーサー関数
}

// 地域情報の型（pos-geoId-mapで使用）
export interface RegionInfo {
  geoId: GeoPosSuggestion;
  region?: string;      // 地方名（例：宗谷地方）
  area?: string;        // エリア名（例：宗谷北部）
  city?: string;        // 市町村名（例：稚内市）
}

