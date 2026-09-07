export function calculatePercentageChange(current, previous) {
  if (!previous) return 0;

  return ((current - previous) / previous) * 100;
}

export function calculateSaving(spotCost, contractCost) {
  return spotCost - contractCost;
}

export function calculateSavingPercentage(spotCost, contractCost) {
  if (!spotCost) return 0;

  return ((spotCost - contractCost) / spotCost) * 100;
}

export function getRiskLevel(score) {
  if (score >= 70) return "High";
  if (score >= 40) return "Moderate";
  return "Low";
}

export function getPortFit(vesselDraft, portDraft) {
  return vesselDraft <= portDraft ? "Compatible" : "Limited";
}