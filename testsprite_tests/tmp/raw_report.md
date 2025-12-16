
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** website_P1
- **Date:** 2025-12-16
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001
- **Test Name:** Homepage Load and Content Verification
- **Test Code:** [TC001_Homepage_Load_and_Content_Verification.py](./TC001_Homepage_Load_and_Content_Verification.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/93a3c96f-27db-44db-a494-f3d4d2c90155
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002
- **Test Name:** Dynamic Puja Service Page Content and SEO Metadata
- **Test Code:** [TC002_Dynamic_Puja_Service_Page_Content_and_SEO_Metadata.py](./TC002_Dynamic_Puja_Service_Page_Content_and_SEO_Metadata.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/80f79c1c-22ab-47ba-876a-c755ec5246c4
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003
- **Test Name:** Booking Form Validation and Submission Success
- **Test Code:** [TC003_Booking_Form_Validation_and_Submission_Success.py](./TC003_Booking_Form_Validation_and_Submission_Success.py)
- **Test Error:** Testing stopped due to website loading failure. The booking form could not be accessed as the page remains blank. Please investigate the website loading and navigation issues before retrying tests.
Browser Console Logs:
[ERROR] Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH (at http://localhost:3000/_next/static/development/_buildManifest.js:0:0)
[ERROR] Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH (at http://localhost:3000/_next/static/development/_ssgManifest.js:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/15d214c0-5a25-4578-990d-3a31aad14423
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004
- **Test Name:** Booking Form Validation - Error Handling for Invalid Inputs
- **Test Code:** [TC004_Booking_Form_Validation___Error_Handling_for_Invalid_Inputs.py](./TC004_Booking_Form_Validation___Error_Handling_for_Invalid_Inputs.py)
- **Test Error:** Stopped testing due to the empty /puja-services/ page blocking access to the booking form. Cannot validate booking form input errors without access to the form.
Browser Console Logs:
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/_next/static/media/eaead17c7dbfcd5d-s.p.woff2:0:0)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s diwali-lakshmi-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s bhai-dooj-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s ganesh-chaturthi-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s makar-sankranti-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s gudi-padwa-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[WARNING] [Fast Refresh] performing full reload

Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.
You might have a file which exports a React component but also exports a value that is imported by a non-React component file.
Consider migrating the non-React component export to a separate file and importing it into both files.

It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.
Fast Refresh requires at least one parent function component in your React tree. (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js:347:24)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s diwali-lakshmi-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s bhai-dooj-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s ganesh-chaturthi-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s makar-sankranti-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s gudi-padwa-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[WARNING] Image with src "/images/devi-puja-hero.png" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority (at webpack-internal:///./node_modules/next/dist/shared/lib/utils/warn-once.js:15:20)
[WARNING] [Fast Refresh] performing full reload

Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.
You might have a file which exports a React component but also exports a value that is imported by a non-React component file.
Consider migrating the non-React component export to a separate file and importing it into both files.

It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.
Fast Refresh requires at least one parent function component in your React tree. (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js:347:24)
[ERROR] Warning: Extra attributes from the server: %s%s style 
    at input
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s diwali-lakshmi-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s bhai-dooj-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s ganesh-chaturthi-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s makar-sankranti-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
[ERROR] Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s gudi-padwa-puja-in-pune 
    at div
    at div
    at div
    at div
    at section
    at main
    at PujaServicesIndex (webpack-internal:///./pages/puja-services/index.tsx:291:100)
    at main
    at App (webpack-internal:///./pages/_app.tsx:30:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:81:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js:41:9)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js:33:11)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:81:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:189:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:413:11) (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js:62:13)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/272e0ca6-0047-4cc4-8b1e-9200715cafec
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005
- **Test Name:** API Route Error Handling for Booking Form Submission
- **Test Code:** [TC005_API_Route_Error_Handling_for_Booking_Form_Submission.py](./TC005_API_Route_Error_Handling_for_Booking_Form_Submission.py)
- **Test Error:** Stopped testing due to critical issue: 'Book Now' button does not lead to booking form or page, blocking booking API error response tests.
Browser Console Logs:
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/api/booking/:0:0)
[WARNING] [Fast Refresh] performing full reload

Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.
You might have a file which exports a React component but also exports a value that is imported by a non-React component file.
Consider migrating the non-React component export to a separate file and importing it into both files.

It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.
Fast Refresh requires at least one parent function component in your React tree. (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js:347:24)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/api/booking/:0:0)
[WARNING] [Fast Refresh] performing full reload

Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.
You might have a file which exports a React component but also exports a value that is imported by a non-React component file.
Consider migrating the non-React component export to a separate file and importing it into both files.

It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.
Fast Refresh requires at least one parent function component in your React tree. (at webpack-internal:///./node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js:347:24)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/api/booking/:0:0)
[ERROR] Failed to load resource: net::ERR_CONTENT_LENGTH_MISMATCH (at http://localhost:3000/_next/static/development/_buildManifest.js:0:0)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/api/booking/:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/7ac832d9-d078-4fe1-96b8-4598afdae76a
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006
- **Test Name:** Breadcrumb Navigation Correctness
- **Test Code:** [TC006_Breadcrumb_Navigation_Correctness.py](./TC006_Breadcrumb_Navigation_Correctness.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/47574e6f-1f6c-4738-8423-c4a14e6a3296
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC007
- **Test Name:** Reusable Component Rendering Consistency
- **Test Code:** [TC007_Reusable_Component_Rendering_Consistency.py](./TC007_Reusable_Component_Rendering_Consistency.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/05e9ea22-d63c-46ac-ab2c-6a7ae84c805c
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC008
- **Test Name:** Analytics Tracking of User Interaction and Page Views
- **Test Code:** [TC008_Analytics_Tracking_of_User_Interaction_and_Page_Views.py](./TC008_Analytics_Tracking_of_User_Interaction_and_Page_Views.py)
- **Test Error:** The homepage is empty with no interactive elements or navigation links, so I cannot proceed with navigation or user interactions to verify analytics event capturing and logging. Task cannot be completed as intended.
Browser Console Logs:
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at https://www.googletagmanager.com/gtag/js?id=G-QGCW57PWZ2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/_next/static/media/eaead17c7dbfcd5d-s.p.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/_next/static/chunks/main.js:0:0)
[WARNING] The resource http://localhost:3000/_next/static/media/e4af272ccee01ff0-s.p.woff2 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. (at http://localhost:3000/:0:0)
[WARNING] The resource http://localhost:3000/_next/static/media/eaead17c7dbfcd5d-s.p.woff2 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. (at http://localhost:3000/:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/3d1d0c0b-d8d2-4297-8bb5-38bbba385642
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009
- **Test Name:** WhatsApp Contact Button Functionality
- **Test Code:** [TC009_WhatsApp_Contact_Button_Functionality.py](./TC009_WhatsApp_Contact_Button_Functionality.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/2bb9c883-900a-4b71-b3ab-de064838a745
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010
- **Test Name:** Access and Content Verification for Informative Pages
- **Test Code:** [TC010_Access_and_Content_Verification_for_Informative_Pages.py](./TC010_Access_and_Content_Verification_for_Informative_Pages.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/c5869a53-9f00-4b39-a913-ca7a953ab5bc
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC011
- **Test Name:** Puja Service Locations and Related Pujas Display
- **Test Code:** [TC011_Puja_Service_Locations_and_Related_Pujas_Display.py](./TC011_Puja_Service_Locations_and_Related_Pujas_Display.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/cb46a278-5613-4871-aff9-ca140d3d2f0f/58253171-e3d5-42a4-b0ad-1985ec2609dd
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **63.64** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---