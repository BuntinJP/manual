---
title: wrangler deploy
description: 🆙 Deploy a Worker to Cloudflare
---

>翻訳元:`wrangler deploy --help`

wrangler deploy [script]

🆙 Deploy a Worker to Cloudflare


<pre>
POSITIONALS
  script  The path to an entry point for your Worker  [string]

GLOBAL FLAGS
  -c, --config   Path to Wrangler configuration file  [string]
      --cwd      Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env      Environment to use for operations, and for selecting .env and .dev.vars files  [string]
  -h, --help     Show help  [boolean]
  -v, --version  Show version number  [boolean]

OPTIONS
      --name                                       Name of the Worker  [string]
      --no-bundle                                  Skip internal build steps and directly deploy Worker  [boolean] [default: false]
      --outdir                                     Output directory for the bundled Worker  [string]
      --outfile                                    Output file for the bundled worker  [string]
      --compatibility-date                         Date to use for compatibility checks  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --latest                                     Use the latest version of the Workers runtime  [boolean] [default: false]
      --assets                                     Static assets to be served. Replaces Workers Sites.  [string]
      --var                                        A key-value pair to be injected into the script as a variable  [array]
      --define                                     A key-value pair to be substituted in the script  [array]
      --alias                                      A module pair to be substituted in the script  [array]
      --triggers, --schedule, --schedules          cron schedules to attach  [array]
      --routes, --route                            Routes to upload  [array]
      --jsx-factory                                The function that is called for each JSX element  [string]
      --jsx-fragment                               The function that is called for each JSX fragment  [string]
      --tsconfig                                   Path to a custom tsconfig.json file  [string]
      --minify                                     Minify the Worker  [boolean]
      --dry-run                                    Don't actually deploy  [boolean]
      --metafile                                   Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir.  [string]
      --keep-vars                                  When not used (or set to false), Wrangler will delete all vars before setting those found in the Wrangler configuration.
                                                   When used (and set to true), the environment variables are not deleted before the deployment.
                                                   If you set variables via the dashboard you probably want to use this flag.
                                                   Note that secrets are never deleted by deployments.  [boolean] [default: false]
      --logpush                                    Send Trace Events from this Worker to Workers Logpush.
                                                   This will not configure a corresponding Logpush job automatically.  [boolean]
      --upload-source-maps                         Include source maps when uploading this Worker.  [boolean]
      --old-asset-ttl                              Expire old assets in given seconds rather than immediate deletion.  [number]
      --dispatch-namespace                         Name of a dispatch namespace to deploy the Worker to (Workers for Platforms)  [string]

Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md

</pre>
