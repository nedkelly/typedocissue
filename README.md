# TypeDoc Issue

To reproduce the error just comment out Complex in `typedoc.js`

```
exclude: [
  '**/index.*',
  // '**/Complex/**', // <-- Here
],
```

## This issue is replicated in `schema-dts@0.4.4` but not `schema-dts@0.6.0`

## This is a test repo to reproduce this issue:

```sh
Using TypeScript 3.9.7 from /home/****/****/****/typedocissue/node_modules/typescript/lib

<--- Last few GCs --->

[14442:0x3c9d300]   191564 ms: Scavenge 2031.8 (2044.3) -> 2024.1 (2044.3) MB, 10.0 / 0.0 ms  (average mu = 0.277, current mu = 0.325) allocation failure 
[14442:0x3c9d300]   191579 ms: Scavenge 2031.9 (2044.3) -> 2024.3 (2044.6) MB, 9.1 / 0.0 ms  (average mu = 0.277, current mu = 0.325) allocation failure 
[14442:0x3c9d300]   191593 ms: Scavenge 2032.0 (2044.6) -> 2024.3 (2060.8) MB, 9.7 / 0.0 ms  (average mu = 0.277, current mu = 0.325) allocation failure 


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x13cb519]
Security context: 0x192c2f3008d1 <JSObject>
    1: createPrinter [0x2aafcf9ee4c1] [/home/****/****/****/typedocissue/node_modules/typescript/lib/typescript.js:~95076] [pc=0x1f5d100a177](this=0x0e6ca13ffdc1 <Object map = 0x26d92c010b9>,0x1fda10c5c6e9 <Object map = 0xd284f64f6b9>,0x3d9a379404b1 <undefined>)
    2: symbolToString(aka symbolToString) [0xa7cbe266d71] [/home/****/****/****/typedoci...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xa07f90 node::Abort() [node]
 2: 0xa0839c node::OnFatalError(char const*, char const*) [node]
 3: 0xb80d9e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xb81119 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xd2d875  [node]
 6: 0xd2df06 v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [node]
 7: 0xd3a785 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]
 8: 0xd3b635 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 9: 0xd3ccdf v8::internal::Heap::HandleGCRequest() [node]
10: 0xceba15 v8::internal::StackGuard::HandleInterrupts() [node]
11: 0x1046166 v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [node]
12: 0x13cb519  [node]
Aborted
```