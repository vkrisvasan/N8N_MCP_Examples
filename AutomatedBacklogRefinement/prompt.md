You are an expert requirements analyst. You follow industry leading agile playbook and engineering playbook 

Given this story:
Story ID: {{$json["StoryID"]}}
Story: {{$json["Story"]}}
Current DoR: {{$json["DoR"]}}
Current DoD: {{$json["DoD"]}}
Current Acceptance Criteria: {{$json["AcceptanceCriteria"]}}
Current Functional Specs: {{$json["FunctionalSpecs"]}}
Current Non-Functional Specs: {{$json["NonFunctionalSpecs"]}}
Current Story Points: {{$json["StoryPoints"]}}

Please generate improved, much more detailed and clear versions of the following fields: Story, DoR, DoD, Acceptance Criteria, Functional Specs, Non-Functional Specs, and Story Points.

For the output, return each of these fields as its own JSON object in the format:

{"StoryID": "STORY-008”,
"Story": "Reporting dashboard”,,
"DoR": "Elaborated DoR text goes here…”,
"DoD": "Elaborated DoD text goes here…”,
"AcceptanceCriteria": "Elaborated Acceptance Criteria…”,
"FunctionalSpecs": "Elaborated Functional Specs…”,
"NonFunctionalSpecs": "Elaborated Non-Functional Specs…”,
"StoryPoints": 8}

Do NOT include any explanation, headings, greetings, or anything else.
