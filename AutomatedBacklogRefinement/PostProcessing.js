const responseText = $json["output"] || "";

// Find the first '{' or '['
const jsonStart = Math.min(
  responseText.indexOf("{") >= 0 ? responseText.indexOf("{") : Infinity,
  responseText.indexOf("[") >= 0 ? responseText.indexOf("[") : Infinity
);

if (jsonStart === Infinity) {
  throw new Error("No JSON object or array found in response");
}

// Try to find matching end - naive approach by last '}' or ']'
const jsonEnd = Math.max(responseText.lastIndexOf("}"), responseText.lastIndexOf("]"));

if (jsonEnd < jsonStart) {
  throw new Error("Malformed JSON boundaries in response");
}

const jsonString = responseText.substring(jsonStart, jsonEnd + 1);

// Optionally replace single quotes with double quotes only if safe
// but be cautious: this might corrupt valid JSON if used blindly.

// Try parsing the extracted substring
try {
  const parsed = JSON.parse(jsonString);
  return [{ json: parsed }];
} catch (e) {
  throw new Error("JSON parse failed: " + e.message + "\nExtracted string:\n" + jsonString);
}
