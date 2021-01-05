const keys = require('../../config/keys');

module.exports = (survey) => {
	
return `

<html>

<body>
<div style="text-align: center;">
<h3>I'd like your input!</h3>
<p>please answer folllowing questions:</p>
<p>${survey.body}</p>
<div>
 <a href="${keys.redirectDomain}/api/surveys/thanks">yes</a>
</div>
<div>
<a href="${keys.redirectDomain}/api/surveys/thanks">no</a>

</div>
</div>
</body>
</html>

`;
	
	
};