# AWS current-body new-signature independent review

Result: PASS for all 100 keys, with no required translation corrections. Canonical files were not modified.

## Scope and counts

- Reviewed all 100 English sources and Japanese translations in part1/part2, protected inline mappings, and all distinct supplied before/after-context combinations. Duplicate contexts were grouped by kind/text/protected after excluding local IDs, rather than manually rereading identical prose.
- Count reconciliation against `reuse-plan.json` pages[].segments, joining every page/currentId and asserting signature equality: **579 unfilled new occurrences + 121 same-page-exact-match existing occurrences = 700 total context occurrences**. No other statuses are present in this set. The request scope string describes the new-translation application count, whereas its occurrences arrays also include existing reusable contexts. Apply candidate new translations only to the 579 unfilled occurrences; preserve the accepted old translations for the 121 exact matches. This review checked candidate suitability across all 700 supplied contexts, but does not authorize replacing those 121 accepted values.
- For every one of the 700 occurrences, checked programmatically that the context entry with the occurrence ID exactly matches its key source in kind/text/protected. No mismatch. All 100 translations preserve the full protected-token multiset. Key coverage is exactly 100, no missing keys.
- This is translation/context verification against the supplied extracted source and nearby context, not a fresh remote fetch or a rendered-site/integration test. Parent must still assemble with current IR/source hashes and run pipeline tests.

## Security-sensitive semantics

- GetParameter: denying ssm:GetParameter alone does not restrict GetParameters, GetParameterHistory, or GetParametersByPath. Preserved.
- GetParameters: authorized against plural ssm:GetParameters, not singular ssm:GetParameter. Denial of the singular action does not prevent retrieval via the plural operation. Preserved.
- GetParametersByPath: requested path controls authorization; individual returned parameters and ssm:GetParameter do not. /a + Recursive=true includes /a/b despite explicit access denial for /a/b. All possible ancestor paths, not merely immediate parent or the leaf, must have ssm:GetParametersByPath denied. Both paragraphs preserve these distinctions.
- GetParameterHistory: history includes current version. Denied GetParameter/GetParameters/GetParametersByPath plus allowed GetParameterHistory still exposes current value. Preserved.
- DeleteParameter vs DeleteParameters: separate authorization actions; denying singular alone does not block plural deletion. Both directions of the explanation match their respective source pages.
- No actual IAM policy or API operation was changed or executed.

## Non-blocking editorial note

Part1 uses パラメーター / コネクター and 最大, whereas part2 uses パラメータ / コネクタ and 最大値. These are stylistic differences, not semantic errors. Optional normalization should follow existing project terminology; it is not required by this review. Identifier/type-only paragraphs intentionally retain English tokens. Do not add units to shared min/max constraints: the contexts include both lengths and collection counts.

## Input fingerprints

- `new-signature-translation-request.json` SHA-256 `e3b27f61b2071b715013725ecee45b8812253ef2b15d8443f3d112ca4f569846`
- `new-translations-part1.json` SHA-256 `423acf05af8d4945cd1e208884aa840eaad4a91b2e2efe3fe55fef8391de2808`
- `new-translations-part2.json` SHA-256 `9f11a7987088ea8be12d98f03b6309d5de38e673825b1bffa06243710f5c3cfb`

- `reuse-plan.json` SHA-256 `441f84ace14e81bc82c860b16bf6a66294473314b9bba0dc21a6ca8c50e4edaa`

## Per-key decisions

All rows below: PASS; required correction: none. Count is the actual supplied occurrence count; contexts count excludes local IDs and includes full kind/text/protected tuples.

| Key | Occurrences | Context variants | Decision |
| --- | ---: | ---: | --- |
| `38c6b80c169be488641d62458e1250929c8e16aa8348c8d6ca266e17b2487a00` | 1 | 1 | PASS; no required correction |
| `899bbef4940ca71fd166037ff5f831577ea5d510b0d8c42a429486902aed36cb` | 1 | 1 | PASS; no required correction |
| `ccdbb53fe049e6d14221849f1ad5d6bb6063f00e7cb3fa38eeff3f00058344b8` | 53 | 1 | PASS; no required correction |
| `d60b81397cf98d08a61877a2fb15373084773e5218b6480862e4f4ecae979017` | 106 | 2 | PASS; no required correction |
| `21c120a2a1fa4e0548089ebd0417a30d969e41af69cf2cc51f2522f5c22892a0` | 53 | 1 | PASS; no required correction |
| `a486ed0401d5a6ea4fff8df09ff0ed9f116892eacad278c422d48e8e65d08b6f` | 53 | 1 | PASS; no required correction |
| `e24f12880668ad0c5a6a1d66f35a6da906d12cf831cdbbe35c0ca0092b7a26a9` | 53 | 1 | PASS; no required correction |
| `94727173545397c47bd7406a5159dbe6ce4fdb856fa2d67172281be08e573989` | 53 | 1 | PASS; no required correction |
| `edea31a78d991369874ba2f35f12e6acf6a4e15818d292e72cda82622c10651f` | 53 | 1 | PASS; no required correction |
| `a9c0787cc0761fea4e5b3cc9f7d47bb11fbca92c7581f4bfa8477dd553512de6` | 3 | 3 | PASS; no required correction |
| `bb6492ea80d30f640d5d9d5389e6abf03a0eb59800733c057060adaad6e2b2bf` | 3 | 1 | PASS; no required correction |
| `3ed02eb9ff093c9d8a719a5a140bd185f26c9d9401399e6afc32b083e2ce2309` | 3 | 1 | PASS; no required correction |
| `b45527130f976af93dd2ca87e7dc0c5d89f35e5529ab8b593c6d83f0bfe989ba` | 3 | 1 | PASS; no required correction |
| `b07350764605d29bfe82a0acff84632fdee1f68b8c05260e644ca9bc0707cabb` | 3 | 1 | PASS; no required correction |
| `2f364bd2fa584b985fd034ef889fbd465315cbefe37ffdc0149499a8f8a393c3` | 3 | 1 | PASS; no required correction |
| `a4cc4abd7d0159e297cf6bf77e9ae161a336fa6287dee5bc03a702b13f6e3918` | 3 | 1 | PASS; no required correction |
| `58888ca87ff9394de30939354cc42d0ce973435f2b1ded7da8448d5e8f0168ee` | 3 | 1 | PASS; no required correction |
| `4842e4cdb564d7d587e0205a2d69f79b6737af2c45a17f1c898a42c0ff86eaa1` | 3 | 1 | PASS; no required correction |
| `503dbb868a258226cc83b950af696e7e8ab41ed19cb8f4147db0a02572429ae5` | 3 | 1 | PASS; no required correction |
| `084ce479f0465d13a9d1072a78ebfca5cacb76803c4c90c61dc5fa064770c966` | 3 | 1 | PASS; no required correction |
| `b61e52f1d6526095ad1e2e4ad599efea155c399fff4a9ebe002ac5c487c8c434` | 3 | 1 | PASS; no required correction |
| `03f6f857b9060729ddd3366b64da3d478df49cea492ee1bc1837a750955939aa` | 3 | 1 | PASS; no required correction |
| `88d9f17167a20ba22cda1f3e28c404edac2e62dfa0a02e965969ec5ada7807f6` | 3 | 1 | PASS; no required correction |
| `85a014ffc238ca96f44961c9fd2152ff73935ea72599e5fa9ff3115e88ad9080` | 3 | 1 | PASS; no required correction |
| `d27f5a34bcdbc0fd6a8c74dbe3a120e3ccff629753d275aec19f04c743a1d74d` | 3 | 1 | PASS; no required correction |
| `2bfb549cdcbc6e3e15518a347aa98eed5cfa49a23c7ea094e5902331a58f9b4a` | 3 | 1 | PASS; no required correction |
| `55ed4b2f0cb2228af2288c3859d1e4c53f2ebe00f208eace898520043a8a858a` | 3 | 1 | PASS; no required correction |
| `63318b1ad76e4ae0c83fc6432ac4f17b5927a2f982bc19f6c513393d638d8361` | 3 | 1 | PASS; no required correction |
| `c9a0b5df03fed5583c74506862e211847128e01f8c2c982266684d50ca037420` | 3 | 1 | PASS; no required correction |
| `1944b4a5637b43932c2b706669864d9809ae0b3d66a1e08b23bf425b6bfa7c0d` | 21 | 2 | PASS; no required correction |
| `5f3c6e77d935f56be351f8bdfd42829ee35085cae2ab42204f27cdf46a130868` | 4 | 2 | PASS; no required correction |
| `dd8dede6660b1b949c44f54155a0306998d3534735c2b42a239f9c416ab878cc` | 3 | 1 | PASS; no required correction |
| `f75b43b0339f068639db60005080b633fca00656ed856f524e338c7777cbac27` | 3 | 1 | PASS; no required correction |
| `7a7675d5e4188be6d458420b005065c50f27e2f487d944fac41e54169b4815ac` | 3 | 1 | PASS; no required correction |
| `21bf5a04b8ea4a42bb0fce2d58fda3e1da23bfafea58027354260bb8c8bdcb8e` | 1 | 1 | PASS; no required correction |
| `f4a1d2ad1ec34f817cf70cf6930fe1f9f42d6a9937721748af3f48bd445dd237` | 3 | 2 | PASS; no required correction |
| `f14e336d08685ffaf08a4905c0d58c2409fafddf0d7d66e34276958b1f035c4c` | 1 | 1 | PASS; no required correction |
| `046772bc02cbc97f7949f227e9958b10ef3548b8916386282031363e526a6c10` | 1 | 1 | PASS; no required correction |
| `1838bab2abb88201816e8942062d953c4649fbe02493422aa97676b807f7ff53` | 1 | 1 | PASS; no required correction |
| `e361945cea2de7b9ee34f106aae6ae358e34e996f1d67fad82b3e66b123f6fca` | 5 | 2 | PASS; no required correction |
| `fe0290a93670eb72b4ff2be647b6111213be1879441b94582c6a09ed7aa0dafa` | 1 | 1 | PASS; no required correction |
| `7888cc36b3ca53dadc576c73331565f340c6db0ead046cd2cb32718b1f60c77e` | 1 | 1 | PASS; no required correction |
| `1ac7d91dedb732e834f38181b05c6e42125f8ccc75791bff33936b27e4992446` | 1 | 1 | PASS; no required correction |
| `e843b4e13d634369b850682703e0bbe41bb134a2b931baca30533ebd75d10b31` | 1 | 1 | PASS; no required correction |
| `fb736d8e9ba182e3f7fff3ef01393d16fce52359f60d5807b423862a30ff6437` | 1 | 1 | PASS; no required correction |
| `96a4ce997ee07516b82a62c85ebf3e53b4369be977f35019dc87ab431709260d` | 1 | 1 | PASS; no required correction |
| `6f0e5230cb4cdd54f320d8923aa93c819cd995a180bfa036c99f124fbb5ba919` | 1 | 1 | PASS; no required correction |
| `ac74b30edb124a60fb4e913b6b895e71571a723809d9a4b398f2b2ba06d64c4f` | 1 | 1 | PASS; no required correction |
| `bd73a1052b2d656d10e56fe5e7cf918a0f9da13b1e61ee71fc33f6743ba25d8f` | 1 | 1 | PASS; no required correction |
| `a3dc482effa4e95a6d38b0c897c4a4ddb8be6c6ae47e9af2f85599d448099c1f` | 1 | 1 | PASS; no required correction |
| `7eea82342de332ff51d219e13bb8c1d6e544c59b5614003cfe51f3cc9a77ffe8` | 1 | 1 | PASS; no required correction |
| `193a6b636c575f76f33375b0f120027e96b69e75d6cc75c61db82b9d162bc9ac` | 1 | 1 | PASS; no required correction |
| `cdb4511dd515209d2c2e6461e8fff3b0a283e69c050f264532b2e2c9385e9e9a` | 1 | 1 | PASS; no required correction |
| `a93d8500365d57f25095897d074da92a39ebe31a563230d827b56f593a1be925` | 1 | 1 | PASS; no required correction |
| `42b9b539326b3005d73b68f31e6404052c799d48934813df86cbdebab6852346` | 1 | 1 | PASS; no required correction |
| `b066f4b305bbd7484f216fc62f41c93cfb59017eff1ba014bf0dc492e949debb` | 1 | 1 | PASS; no required correction |
| `9f1ad364d3f512a527f05ccb8627961d0a2d2857e68715e04de5eaa8e1a245bf` | 1 | 1 | PASS; no required correction |
| `ba939564aafe8c320ed3ea9c679d26643ef437c44539c1364917ecce1124f623` | 1 | 1 | PASS; no required correction |
| `48347d5ffcff6c4e0a7895cc1532b6d35db1d62e986c322dd15aa86ef95b645f` | 1 | 1 | PASS; no required correction |
| `2d84ca54090714594de2e2edcd34e27b5cf0917b4ff251f2841fa60f1e18e7f7` | 1 | 1 | PASS; no required correction |
| `c6c1786091db1a3f0ed3c4bb3911246ebe425b31f246efe3ece300cdd54065fe` | 1 | 1 | PASS; no required correction |
| `c78a03a3ad6c751a7735696b6b018c6e1a758e8a8c064aba69d4e029de7390d3` | 4 | 2 | PASS; no required correction |
| `1891ec9413175319d06677ade1fc4521cfdadb619be83cf803887ad8d0e5c082` | 1 | 1 | PASS; no required correction |
| `dafb4d24a816e1b9cf2f1259a16966df9f23cf96f61fe0775347b5c65188ba99` | 1 | 1 | PASS; no required correction |
| `6dd44986d9d838fa92e030ecdf41a00bd7375ae2c420275858f316ba3f4ce97b` | 1 | 1 | PASS; no required correction |
| `c2a2ab1456c76d5bb427c7e9367810589c2c6f5f4bbdfa5aa9ee2ffc47305cca` | 1 | 1 | PASS; no required correction |
| `9a6181881adfdfdbf10fbb7fef9303aac7a515b3f2a5fe6789b4169dbc3e5e9b` | 3 | 3 | PASS; no required correction |
| `9750f060d5ce3e8a33a7a983624a4c11fd763bf3f2ffe4d4e2d6792a64bc71e9` | 1 | 1 | PASS; no required correction |
| `b2916daf47e6af14e3fff8b09842446e03d87ed837768a8b714083503a1bcb21` | 1 | 1 | PASS; no required correction |
| `83b897fcf34fe7b03f1a1e92471883a1fc6cb1f8dfe6b21c2ca18583a148ffa1` | 1 | 1 | PASS; no required correction |
| `cb04fd0563228d84b9fd48d5ee91f735f04013eeff24064f840d4e9895c31c5e` | 3 | 2 | PASS; no required correction |
| `95927716bce67ef4a877a32688656284a3b8a260771ab233462dac17aea6cd1e` | 1 | 1 | PASS; no required correction |
| `ae6b346ce7089d3e1b4d133eb8d92d090c55e111e7193706999f8813e6b13131` | 1 | 1 | PASS; no required correction |
| `cba9cd0e3e7a7f2d48a4de3a85701c3b53142a78e11be0ae2d67f388e46fa132` | 1 | 1 | PASS; no required correction |
| `7394224248f6dcfec839df6ece0478a08288c5e8abcb3d61f306df028ab8a072` | 3 | 2 | PASS; no required correction |
| `af906188103c18511d2454e9defb7dad96c3295b398d65258d2f8e66449ba4d1` | 1 | 1 | PASS; no required correction |
| `67eb500c018c81d75f0a093a46a4cd5eae39e69d4af048185a6001c17734d18c` | 2 | 2 | PASS; no required correction |
| `184eb0f7eb91df5c6baa58f55f37c2da9c281951cc353ea8296d546c9d6bf829` | 2 | 2 | PASS; no required correction |
| `c2db898a749019dd5432d0d0292ddd0db8961a0937bc664547fc6af95e94c81e` | 48 | 37 | PASS; no required correction |
| `957cc046385b28f3ad249ce212d2592b9b814fc9cf928dacff39761f1d283e22` | 1 | 1 | PASS; no required correction |
| `fa4e7f4713af4c07002e15b50129084246a18a4d51d37ac81c002c90942087c0` | 1 | 1 | PASS; no required correction |
| `984125c2b7aa99dc2ab5b4ab9a5ebb5933071e6194075458d0e02bc02a4be054` | 1 | 1 | PASS; no required correction |
| `119015252a917b8e3bcdc39b8d92babe8c047df9addbf435a075f84ddf254796` | 1 | 1 | PASS; no required correction |
| `f58478ba0fdc76e80ca5c6b989e6aa1e67510ad40b8a50845d5efa72ec444456` | 1 | 1 | PASS; no required correction |
| `4fce90c56c19f7cd90910d5a74db3172a2cf48d25dd5e80dbe851cd567696fd4` | 1 | 1 | PASS; no required correction |
| `2f4a423690d64b79a1406d7f48340bb034d3b487a7a90d11f00ad2757028ca96` | 1 | 1 | PASS; no required correction |
| `4fe53269a9118ff031ec1fdc2a5d5c8f79097f775a75fde0f965349063b6ee0f` | 1 | 1 | PASS; no required correction |
| `39229357e5fc99e4b5d17898ca743904f6448f8e4b5ae613576f8d63fe3a7a95` | 1 | 1 | PASS; no required correction |
| `d1c3f947c584e8d4505f94c97b5e7083b9ca3e50fb38d67a52d9c5f7ce5738c6` | 1 | 1 | PASS; no required correction |
| `ec1e325bdb7b231bd865f4e149bb2b4d7d7537f75d80d84ffe3d3b678e2a6c30` | 1 | 1 | PASS; no required correction |
| `50ca5ec66673fa10033558ad2594ce2b31409d9ced89cf8337c8491b5f954611` | 1 | 1 | PASS; no required correction |
| `0a47f37d17c2949797b414e847674706f5745354a24163e0b193cadf39fbe133` | 1 | 1 | PASS; no required correction |
| `2c7a80559cdea722271b830b309adfee30389daed1e0d8fd12c8b5b1a31e2361` | 1 | 1 | PASS; no required correction |
| `0236c620bbc4947f7a5c70b0b162b4338c62bceb8320d8afec30b5d945b97663` | 1 | 1 | PASS; no required correction |
| `de4035992582c4fcc086449d4e112a504263c57a0b961e920a9fa9533b18faa9` | 1 | 1 | PASS; no required correction |
| `d677f67346aef8b503e5d47c589d7cae2c7d17f770262e9335239d842e21c696` | 1 | 1 | PASS; no required correction |
| `7c6e2629b41022784ad00de9b3865a53565ad955bf9d8cfa207ab85256a3e943` | 2 | 2 | PASS; no required correction |
| `f8396bf01efc308847995ba0f80e12af0620c30198713adf8e2c29caaede0b96` | 48 | 23 | PASS; no required correction |
| `e1eb280e7890c02feaa3e65214dfbec05d3c43d14ea2791fee7ac98ce71ec027` | 3 | 3 | PASS; no required correction |
| `36936b348cf29f30b45140ec1098db5f82ed3b97993ef6c4c484bb30fdfa265a` | 1 | 1 | PASS; no required correction |
