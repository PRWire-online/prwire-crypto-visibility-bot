#!/usr/bin/env node

interface CryptoVisibilityInput {
  prTitle: string;
  indexTracking: number;
  algorithmicVisibility: number;
  entityAuthority: number;
  backlinkQuality: number;
  aiDiscovery: number;
  distributionReach: number;
}

interface CryptoVisibilityOutput {
  prTitle: string;
  indexTrackingScore: number;
  algorithmicVisibilityScore: number;
  entityAuthorityScore: number;
  backlinkQualityScore: number;
  aiDiscoveryScore: number;
  distributionReachScore: number;
  overallVisibilityScore: number;
  priorityAction: string;
  distributionNetwork: Record<string, number>;
}

function getStatus(score: number): string {
  if (score <= 30) return "Critical";
  if (score <= 60) return "At Risk";
  if (score <= 80) return "Healthy";
  return "Excellent";
}

function getPriorityAction(scores: Record<string, number>): string {
  const labels: Record<string, string> = {
    indexTracking: "Index Tracking",
    algorithmicVisibility: "Algorithmic Visibility",
    entityAuthority: "Entity Authority",
    backlinkQuality: "Backlink Quality",
    aiDiscovery: "AI Discovery",
    distributionReach: "Distribution Reach",
  };
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b);
  return `${labels[lowest[0]]} (${lowest[1]}/100 — act first)`;
}

function getDistributionNetwork(indexTracking: number, aiDiscovery: number): Record<string, number> {
  return {
    "Google Index": Math.min(100, Math.round(indexTracking * 1.0)),
    "Bing Index": Math.min(100, Math.round(indexTracking * 0.95)),
    "ChatGPT Discovery": Math.min(100, Math.round(aiDiscovery * 1.0)),
    "Perplexity AI": Math.min(100, Math.round(aiDiscovery * 1.05)),
    "Google AI Overviews": Math.min(100, Math.round(aiDiscovery * 1.13)),
  };
}

export function trackCryptoVisibility(input: CryptoVisibilityInput): CryptoVisibilityOutput {
  const scores = {
    indexTracking: input.indexTracking,
    algorithmicVisibility: input.algorithmicVisibility,
    entityAuthority: input.entityAuthority,
    backlinkQuality: input.backlinkQuality,
    aiDiscovery: input.aiDiscovery,
    distributionReach: input.distributionReach,
  };
  const overallVisibilityScore = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / 6
  );
  return {
    prTitle: input.prTitle,
    indexTrackingScore: input.indexTracking,
    algorithmicVisibilityScore: input.algorithmicVisibility,
    entityAuthorityScore: input.entityAuthority,
    backlinkQualityScore: input.backlinkQuality,
    aiDiscoveryScore: input.aiDiscovery,
    distributionReachScore: input.distributionReach,
    overallVisibilityScore,
    priorityAction: getPriorityAction(scores),
    distributionNetwork: getDistributionNetwork(input.indexTracking, input.aiDiscovery),
  };
}

const args = process.argv.slice(2);
const prTitle = args[0] || "crypto-press-release";
const indexTracking = parseInt(args[1]) || 78;
const algorithmicVisibility = parseInt(args[2]) || 65;
const entityAuthority = parseInt(args[3]) || 82;
const backlinkQuality = parseInt(args[4]) || 70;
const aiDiscovery = parseInt(args[5]) || 55;
const distributionReach = parseInt(args[6]) || 88;

const result = trackCryptoVisibility({
  prTitle, indexTracking, algorithmicVisibility,
  entityAuthority, backlinkQuality, aiDiscovery, distributionReach,
});

console.log(`PR Title: ${result.prTitle}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Index Tracking Score:        ${result.indexTrackingScore}/100  [${getStatus(result.indexTrackingScore)}]`);
console.log(`Algorithmic Visibility:      ${result.algorithmicVisibilityScore}/100  [${getStatus(result.algorithmicVisibilityScore)}]`);
console.log(`Entity Authority Score:      ${result.entityAuthorityScore}/100  [${getStatus(result.entityAuthorityScore)}]`);
console.log(`Backlink Quality Score:      ${result.backlinkQualityScore}/100  [${getStatus(result.backlinkQualityScore)}]`);
console.log(`AI Discovery Score:          ${result.aiDiscoveryScore}/100  [${getStatus(result.aiDiscoveryScore)}]`);
console.log(`Distribution Reach Score:    ${result.distributionReachScore}/100  [${getStatus(result.distributionReachScore)}]`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Overall Visibility Score:    ${result.overallVisibilityScore}/100`);
console.log(`Priority Action:             ${result.priorityAction}`);
console.log("\nDistribution Network:");
Object.entries(result.distributionNetwork).forEach(([network, score]) => {
  console.log(`  ${network.padEnd(22)} ${score}/100`);
});
