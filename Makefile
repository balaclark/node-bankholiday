install:
	@npm install

clean-reports:
	@rm -rf build/reports

run-tests:
	@export NODE_ENV=test && npm test

run-tests-report:
	@mkdir -p build/reports
	@mocha test/*-test.js --reporter xunit > build/reports/xunit.xml || true

jenkins: install clean-reports run-tests run-tests-report
