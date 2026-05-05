/** Put this in the individual interview. */
/**
 * Create the script element with the modified Survey Monkey
 * code. Original script is at the bottom[^1]
 * ⚠️ Avoid code that uses strings with code in them in this way
 * in general as it tends to be insecure. Only let trusted editors
 * edit this.
 */
const $survey_monkey_script = $(`<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=[e.getElementById(s)],a=o[o.length-1],c=e.createElement('script'),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8qZ8ON_2FyjUqTzYvfSuztE6S5w9okWY9Dtgf96iKweF7.js",a.parentNode.insertBefore(c,a))})(window,document,"survey_monkey1","smcx-sdk");</script>`);

/**
 * [^1]: The original Survey Monkey embed script: (function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8qZ8ON_2FyjUqTzYvfSuztE6S5w9okWY9Dtgf96iKweF7.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");
 */



