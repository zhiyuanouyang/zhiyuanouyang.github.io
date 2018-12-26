var frameworks = [
{
	'tag': 'Kafka',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Storm',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Spark',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Hadoop',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Fluentd',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Dropwizard',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Django',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Grafana',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Logstash',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Kibana',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Pig',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Oozie',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Flume',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Hive',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Kudu',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Impala',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
}
];

var languages = [
{
	'tag': 'Java',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Python',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Ruby',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Shell',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Perl',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Javascript',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'CSS',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'HTML',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Go',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
}
]

var databases = [
{
	'tag': 'SQLite',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'MySQL',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'PostgreSQL',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'HBase',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Cassandra',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'MongoDB',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Neo4j',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Elasticsearch',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'H2',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
}
]

var tools = [
{
	'tag': 'Docker',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Kubernates',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Jenkins',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Travis-CI',
	'colarIndex': '2',
	'widthPercentage': '60',
	'mark': 'Intermediate'
},
{
	'tag': 'Maven',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Git',
	'colarIndex': '3',
	'widthPercentage': '90',
	'mark': 'Advanced'
},
{
	'tag': 'Puppet',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Hudson',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Intermediate'
},
{
	'tag': 'Subversion',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
},
{
	'tag': 'Ansible',
	'colarIndex': '1',
	'widthPercentage': '30',
	'mark': 'Basic'
}
]

function fillDiv(divId, jsonArr){
	var div = document.getElementById(divId);
	var arr = []
	for(var i = 0; i < jsonArr.length; i++){
		var r = i % 3;
		switch(r){
			case 0:
				arr.push(fillTemplate(jsonArr[i]['tag'], jsonArr[i]['colarIndex'], jsonArr[i]['widthPercentage'], jsonArr[i]['mark'], 'fadeInLeft'))
				break;
			case 1:
				arr.push(fillTemplate(jsonArr[i]['tag'], jsonArr[i]['colarIndex'], jsonArr[i]['widthPercentage'], jsonArr[i]['mark'], 'fadeInUp'))
				break;
			case 2:
				arr.push(fillTemplate(jsonArr[i]['tag'], jsonArr[i]['colarIndex'], jsonArr[i]['widthPercentage'], jsonArr[i]['mark'], 'fadeInRight'))
				break;
		}
	}
	div.innerHTML = arr.join('');
}

function fillTemplate(tag, colarIndex, widthPercentage, mark, fadeWay){
	return `<div class="col-md-6 animate-box" data-animate-effect="${fadeWay}">
				<div class="progress-wrap">
					<h4>${tag}</h4>
					<div class="progress">
						<div class="progress-bar color-${colarIndex}" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:${widthPercentage}%">\
							<span>${mark}</span>
						</div>
					</div>
				</div>
			</div>`;
}

fillDiv('languages', languages);
fillDiv('databases', databases);
fillDiv('frameworks', frameworks);
fillDiv('tools', tools);




