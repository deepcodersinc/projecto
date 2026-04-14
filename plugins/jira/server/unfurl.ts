import fetch from "node-fetch";

export async function unfurl(url: string) {
  const issueKey = url.split("/").pop();
  const res = await fetch(`https://api.atlassian.com/ex/jira/issue/${issueKey}`);
  return res.json();
}
