# Google Forms Integration Setup

# Google Forms Integration Setup

## Create Google Form

Create a form with these fields:

- **Full Name** (Short answer)
- **Current City** (Short answer, e.g., "San Francisco, CA" or "London, UK")  
- **Country** (Short answer or dropdown)
- **House Years** (Short answer, e.g., "2020-2022")
- **Cornell Years** (Short answer, e.g., "2018-2022")
- **Role** (Multiple choice: Current Resident, Alum)

*Note: Coordinates are automatically generated from the city name*

## Set up Apps Script

1. In Google Forms, click the 3 dots menu → Script editor
2. Paste the code from `/scripts/form-to-json.js`
3. Set up form submit trigger:

   - Triggers → Add Trigger
   - Choose function: `onFormSubmit`
   - Event source: From form
   - Event type: On form submit

## Test & Use

- Form submissions will log JSON to Apps Script console
- Copy the JSON and add to `coop_members.json`
- Or enhance the script to auto-create GitHub issues/PRs

## Share Form

Share this form URL with co-op members for easy submissions:
[Your Google Form URL here]
