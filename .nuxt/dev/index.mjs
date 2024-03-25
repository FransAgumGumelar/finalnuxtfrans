globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, getRouterParams, readBody, createError, getQuery as getQuery$1, getResponseStatusText } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/h3/dist/index.mjs';
import * as knex$2 from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/knex/knex.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/devalue/index.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/scule/dist/index.mjs';
import { klona } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/radix3/dist/index.mjs';
import { version, unref } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/PROJEK ITIKOM/FINALPROJEKNUXT/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\PROJEK ITIKOM\\FINALPROJEKNUXT","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\PROJEK ITIKOM\\FINALPROJEKNUXT\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\PROJEK ITIKOM\\FINALPROJEKNUXT\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\PROJEK ITIKOM\\FINALPROJEKNUXT\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\PROJEK ITIKOM\\FINALPROJEKNUXT\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _byUnmTAzcQ = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _byUnmTAzcQ
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_OvBmGW = () => Promise.resolve().then(function () { return _slug__delete$3; });
const _lazy_9rD8Oo = () => Promise.resolve().then(function () { return _slug__put$3; });
const _lazy_BftWua = () => Promise.resolve().then(function () { return userdepartemenanak_get$1; });
const _lazy_hoGDf2 = () => Promise.resolve().then(function () { return userdepartemenanestesi_get$1; });
const _lazy_vWGOtN = () => Promise.resolve().then(function () { return userdepartemenbagiankeuangan_get$1; });
const _lazy_oiVmTn = () => Promise.resolve().then(function () { return userdepartemenbankdarah_get$1; });
const _lazy_cg1aA8 = () => Promise.resolve().then(function () { return userdepartemenbedah_get$1; });
const _lazy_GrHHWx = () => Promise.resolve().then(function () { return detailkaryawan_get$1; });
const _lazy_k3VHC8 = () => Promise.resolve().then(function () { return userkdunit1_get$1; });
const _lazy_qRE3po = () => Promise.resolve().then(function () { return userkdunit42_get$1; });
const _lazy_eYKKum = () => Promise.resolve().then(function () { return userkdunit46_get$1; });
const _lazy_Akttvr = () => Promise.resolve().then(function () { return userkdunit53_get$1; });
const _lazy_BcitDg = () => Promise.resolve().then(function () { return userkdunit55_get$1; });
const _lazy_PcNb7D = () => Promise.resolve().then(function () { return userkdunit60_get$1; });
const _lazy_bhHaok = () => Promise.resolve().then(function () { return userkdunit61_get$1; });
const _lazy_So0c4B = () => Promise.resolve().then(function () { return userkdunit62_get$1; });
const _lazy_KA2SM5 = () => Promise.resolve().then(function () { return userkdunit63_get$1; });
const _lazy_6iY5z0 = () => Promise.resolve().then(function () { return userkdunit70_get$1; });
const _lazy_xYOUqS = () => Promise.resolve().then(function () { return userkdunit71_get$1; });
const _lazy_rcsKqB = () => Promise.resolve().then(function () { return userkdunit84_get$1; });
const _lazy_oGmuEM = () => Promise.resolve().then(function () { return userkdunit85_get$1; });
const _lazy_z9KBMl = () => Promise.resolve().then(function () { return userkdunit87_get$1; });
const _lazy_5Ijon1 = () => Promise.resolve().then(function () { return userkdunit88_get$1; });
const _lazy_tzTNXO = () => Promise.resolve().then(function () { return userkdunit89_get$1; });
const _lazy_1fAi8x = () => Promise.resolve().then(function () { return userkdunit90_get$1; });
const _lazy_pc3X13 = () => Promise.resolve().then(function () { return userkdunit91_get$1; });
const _lazy_4rn0r7 = () => Promise.resolve().then(function () { return userkdunit92_get$1; });
const _lazy_OGV7c3 = () => Promise.resolve().then(function () { return userkdunit93_get$1; });
const _lazy_HUfLIZ = () => Promise.resolve().then(function () { return userrole1_get$1; });
const _lazy_QAqcDX = () => Promise.resolve().then(function () { return userrole10_get$1; });
const _lazy_tM2O6m = () => Promise.resolve().then(function () { return userrole11_get$1; });
const _lazy_14vpGm = () => Promise.resolve().then(function () { return userrole12_get$1; });
const _lazy_xuvC8G = () => Promise.resolve().then(function () { return userrole13_get$1; });
const _lazy_HYuRkM = () => Promise.resolve().then(function () { return userrole14_get$1; });
const _lazy_dbvCN7 = () => Promise.resolve().then(function () { return userrole15_get$1; });
const _lazy_Cet7GT = () => Promise.resolve().then(function () { return userrole2_get$1; });
const _lazy_1KAH8l = () => Promise.resolve().then(function () { return userrole3_get$1; });
const _lazy_UybPkG = () => Promise.resolve().then(function () { return userrole4_get$1; });
const _lazy_HptNCp = () => Promise.resolve().then(function () { return userrole5_get$1; });
const _lazy_Yft1d9 = () => Promise.resolve().then(function () { return userrole6_get$1; });
const _lazy_n4Una7 = () => Promise.resolve().then(function () { return userrole7_get$1; });
const _lazy_miiI8D = () => Promise.resolve().then(function () { return userrole8_get$1; });
const _lazy_ZY6hms = () => Promise.resolve().then(function () { return userrole9_get$1; });
const _lazy_vVWdaN = () => Promise.resolve().then(function () { return userrs_get$1; });
const _lazy_P2Iy4x = () => Promise.resolve().then(function () { return userrs_post$1; });
const _lazy_y6HSj0 = () => Promise.resolve().then(function () { return userrsbyid_get$1; });
const _lazy_9tdEdv = () => Promise.resolve().then(function () { return _slug__delete$1; });
const _lazy_As7VCT = () => Promise.resolve().then(function () { return _slug__put$1; });
const _lazy_ZHLIVH = () => Promise.resolve().then(function () { return pasienrs_get$1; });
const _lazy_BGCbFt = () => Promise.resolve().then(function () { return pasienrs_post$1; });
const _lazy_BQ1Yn3 = () => Promise.resolve().then(function () { return pasienrsbyid_get$1; });
const _lazy_PsJTfT = () => Promise.resolve().then(function () { return join_get$1; });
const _lazy_UnWKdJ = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/user/karyawan/:slug', handler: _lazy_OvBmGW, lazy: true, middleware: false, method: "delete" },
  { route: '/api/user/karyawan/:slug', handler: _lazy_9rD8Oo, lazy: true, middleware: false, method: "put" },
  { route: '/api/user/karyawan/departemen/userdepartemenanak', handler: _lazy_BftWua, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/departemen/userdepartemenanestesi', handler: _lazy_hoGDf2, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/departemen/userdepartemenbagiankeuangan', handler: _lazy_vWGOtN, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/departemen/userdepartemenbankdarah', handler: _lazy_oiVmTn, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/departemen/userdepartemenbedah', handler: _lazy_cg1aA8, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/detailkaryawan', handler: _lazy_GrHHWx, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit1', handler: _lazy_k3VHC8, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit42', handler: _lazy_qRE3po, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit46', handler: _lazy_eYKKum, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit53', handler: _lazy_Akttvr, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit55', handler: _lazy_BcitDg, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit60', handler: _lazy_PcNb7D, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit61', handler: _lazy_bhHaok, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit62', handler: _lazy_So0c4B, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit63', handler: _lazy_KA2SM5, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit70', handler: _lazy_6iY5z0, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit71', handler: _lazy_xYOUqS, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit84', handler: _lazy_rcsKqB, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit85', handler: _lazy_oGmuEM, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit87', handler: _lazy_z9KBMl, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit88', handler: _lazy_5Ijon1, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit89', handler: _lazy_tzTNXO, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit90', handler: _lazy_1fAi8x, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit91', handler: _lazy_pc3X13, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit92', handler: _lazy_4rn0r7, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/kdunit/userkdunit93', handler: _lazy_OGV7c3, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole1', handler: _lazy_HUfLIZ, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole10', handler: _lazy_QAqcDX, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole11', handler: _lazy_tM2O6m, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole12', handler: _lazy_14vpGm, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole13', handler: _lazy_xuvC8G, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole14', handler: _lazy_HYuRkM, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole15', handler: _lazy_dbvCN7, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole2', handler: _lazy_Cet7GT, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole3', handler: _lazy_1KAH8l, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole4', handler: _lazy_UybPkG, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole5', handler: _lazy_HptNCp, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole6', handler: _lazy_Yft1d9, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole7', handler: _lazy_n4Una7, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole8', handler: _lazy_miiI8D, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/roles/userrole9', handler: _lazy_ZY6hms, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/userrs', handler: _lazy_vVWdaN, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/karyawan/userrs', handler: _lazy_P2Iy4x, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/karyawan/userrsbyid', handler: _lazy_y6HSj0, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/pasien/:slug', handler: _lazy_9tdEdv, lazy: true, middleware: false, method: "delete" },
  { route: '/api/user/pasien/:slug', handler: _lazy_As7VCT, lazy: true, middleware: false, method: "put" },
  { route: '/api/user/pasien/pasienrs', handler: _lazy_ZHLIVH, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/pasien/pasienrs', handler: _lazy_BGCbFt, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/pasien/pasienrsbyid', handler: _lazy_BQ1Yn3, lazy: true, middleware: false, method: "get" },
  { route: '/api/userjoin/join', handler: _lazy_PsJTfT, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_UnWKdJ, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_UnWKdJ, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(knex$2);

const knex = require$$0({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
});
var connection = knex;

const knex$1 = /*@__PURE__*/getDefaultExportFromCjs(connection);

const _slug__delete$2 = defineEventHandler(async (event) => {
  const params = await getRouterParams(event);
  params.nip;
  const body = await readBody(event);
  const data = {
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif
  };
  try {
    const [user] = await knex$1("m_login").where("nip", "coba@simrs").delete(data, "*");
    return { statusCode: 201, body: user, message: "Data user berhasil diperbarui" };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }
});

const _slug__delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__delete$2
});

const _slug__put$2 = defineEventHandler(async (event) => {
  const params = await getRouterParams(event);
  params.nip;
  const body = await readBody(event);
  const data = {
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif
  };
  try {
    const [user] = await knex$1("m_login").where("nip", "coba@simrs").update(data, "*");
    return { statusCode: 201, body: user, message: "Data user berhasil diperbarui" };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }
});

const _slug__put$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__put$2
});

const userdepartemenanak_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("departemen", "ANAK");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userdepartemenanak_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userdepartemenanak_get
});

const userdepartemenanestesi_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("departemen", "ANESTESI");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userdepartemenanestesi_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userdepartemenanestesi_get
});

const userdepartemenbagiankeuangan_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("departemen", "BAGIAN KEUANGAN & AKUNTANSI");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userdepartemenbagiankeuangan_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userdepartemenbagiankeuangan_get
});

const userdepartemenbankdarah_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("departemen", "BANK DARAH");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userdepartemenbankdarah_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userdepartemenbankdarah_get
});

const userdepartemenbedah_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("departemen", "BEDAH");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userdepartemenbedah_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userdepartemenbedah_get
});

const detailkaryawan_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("nip", "nama_pegawai", "roles", "kdunit", "kdperawat", "kddokter", "nipb");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const detailkaryawan_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: detailkaryawan_get
});

const userkdunit1_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 1);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit1_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit1_get
});

const userkdunit42_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 42);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit42_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit42_get
});

const userkdunit46_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 46);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit46_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit46_get
});

const userkdunit53_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 53);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit53_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit53_get
});

const userkdunit55_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where(
      "kdunit",
      55
    );
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit55_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit55_get
});

const userkdunit60_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 60);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit60_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit60_get
});

const userkdunit61_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 61);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit61_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit61_get
});

const userkdunit62_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 62);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit62_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit62_get
});

const userkdunit63_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 63);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit63_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit63_get
});

const userkdunit70_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 70);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit70_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit70_get
});

const userkdunit71_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 71);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit71_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit71_get
});

const userkdunit84_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 84);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit84_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit84_get
});

const userkdunit85_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 85);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit85_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit85_get
});

const userkdunit87_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 87);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit87_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit87_get
});

const userkdunit88_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 88);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit88_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit88_get
});

const userkdunit89_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 89);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit89_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit89_get
});

const userkdunit90_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 90);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit90_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit90_get
});

const userkdunit91_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 91);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit91_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit91_get
});

const userkdunit92_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 92);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit92_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit92_get
});

const userkdunit93_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("kdunit", 93);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userkdunit93_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userkdunit93_get
});

const userrole1_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 1);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole1_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole1_get
});

const userrole10_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 10);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole10_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole10_get
});

const userrole11_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 11);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole11_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole11_get
});

const userrole12_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 12);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole12_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole12_get
});

const userrole13_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 13);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole13_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole13_get
});

const userrole14_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 14);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole14_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole14_get
});

const userrole15_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 15);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole15_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole15_get
});

const userrole2_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 2);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole2_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole2_get
});

const userrole3_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 3);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole3_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole3_get
});

const userrole4_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 4);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole4_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole4_get
});

const userrole5_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 5);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole5_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole5_get
});

const userrole6_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 6);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole6_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole6_get
});

const userrole7_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 7);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole7_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole7_get
});

const userrole8_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 8);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole8_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole8_get
});

const userrole9_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*").where("roles", 9);
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrole9_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrole9_get
});

const userrs_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("nip", "nama_pegawai");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const userrs_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrs_get
});

const userrs_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const insertdata = {
    nip: body.nip,
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif
  };
  try {
    const [user] = await knex$1("m_login").insert(insertdata, "*");
    return { statusCode: 201, body: user, message: "Data user berhasil ditambahkan" };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }
});

const userrs_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrs_post
});

const userrsbyid_get = defineEventHandler(
  async (event) => {
    const params = getQuery$1(event);
    const nip = params.nip;
    try {
      const userbyID = await knex$1("m_login").select("*").where("nip", nip);
      return userbyID;
    } catch (error) {
      console.error("Error fetching data user:", error);
      throw createError({
        statusCode: 500,
        message: "Internal Server Error"
      });
    }
  }
);

const userrsbyid_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: userrsbyid_get
});

const _slug__delete = defineEventHandler(async (event) => {
  const params = await getRouterParams(event);
  params.nip;
  const body = await readBody(event);
  const data = {
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif
  };
  try {
    const [user] = await knex$1("m_login").where("nip", "coba@simrs").delete(data, "*");
    return { statusCode: 201, body: user, message: "Data user berhasil diperbarui" };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }
});

const _slug__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__delete
});

const _slug__put = defineEventHandler(async (event) => {
  const params = await getRouterParams(event);
  params.nip;
  const body = await readBody(event);
  const data = {
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif
  };
  try {
    const [user] = await knex$1("m_login").where("nip", "coba@simrs").update(data, "*");
    return { statusCode: 201, body: user, message: "Data user berhasil diperbarui" };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }
});

const _slug__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _slug__put
});

const pasienrs_get = defineEventHandler(async (event) => {
  try {
    const user = await knex$1("m_login").select("*");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const pasienrs_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: pasienrs_get
});

const pasienrs_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const insertdata = {
    nip: body.nip,
    pwd: body.pwd,
    ses_reg: body.ses_reg,
    kdperawat: body.kdperawat,
    kddokter: body.kddokter,
    nama_pegawai: body.nama_pegawai,
    roles: body.roles,
    kdunit: body.kdunit,
    departemen: body.departemen,
    st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
    st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
    st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
    nipb: body.nipb,
    aktif: body.aktif
  };
  try {
    const [user] = await knex$1("m_login").insert(insertdata, "*");
    return { statusCode: 201, body: user, message: "Data user berhasil ditambahkan" };
  } catch (error) {
    throw createError({ statusCode: 500, message: error.message });
  }
});

const pasienrs_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: pasienrs_post
});

const pasienrsbyid_get = defineEventHandler(
  async (event) => {
    const params = getQuery$1(event);
    const nip = params.nip;
    try {
      const userbyID = await knex$1("m_login").select("*").where("nip", nip);
      return userbyID;
    } catch (error) {
      console.error("Error fetching data user:", error);
      throw createError({
        statusCode: 500,
        message: "Internal Server Error"
      });
    }
  }
);

const pasienrsbyid_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: pasienrsbyid_get
});

const join_get = defineEventHandler(async (event) => {
  try {
    const user = await //knex('m_login').select('nip')
    // knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id');
    // knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id');
    // knex('users').innerJoin('accounts', function () {
    // this.on('accounts.id', '=', 'users.account_id').orOn(
    //     'accounts.owner_id',
    //     '=',
    //     'users.id'
    // );
    // });
    knex$1("m_login").select("nip", "rolename", "nama_unit", "nama_grupunit").join("user_roles", "m_login.roles", "=", "user_roles.roleid").join("m_unit", "m_unit.kode_unit", "=", "m_login.kdunit");
    return user;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error"
    });
  }
});

const join_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: join_get
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://D:/PROJEK%20ITIKOM/FINALPROJEKNUXT/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set()
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = false ;
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    modules: /* @__PURE__ */ new Set(),
    set _registeredComponents(value) {
      this.modules = value;
    },
    get _registeredComponents() {
      return this.modules;
    },
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
