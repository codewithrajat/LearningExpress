import { t } from "testcafe";
fixture("Google Search Test")
test.page("https://www.google.com/")("Launch Google", async () => {
    await t.wait(5000).expect(1).eql(1);
})