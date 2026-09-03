curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: token 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" \
  https://api.github.com/repos/engabdasaly-hue/repo_ts/dispatches \
  -d '{"event_type":"run-tests","client_payload":{"env":"staging"}}'
