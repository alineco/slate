This is a fork of Slate used by [Aline](https://www.aline.co/).

# Patches

| Branch                  | Slate PR | Description                                                                                        | When to remove                                                      | Merge commit                                                                          |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `patch/null-node-props` | N/A      | Allows setting node properties to `null`. See https://github.com/ianstormtaylor/slate/pull/4042.   | If Aline no longer needs to set `null` properties (probably never). | [#](https://github.com/alineco/slate/commit/9062e2abe1d2bfb1a58282e30dd6b6741a943ba9) |
| `feat/positions-skip`   | N/A      | Adds a `skip` option to `Editor.positions`, which only works for inline voids (hence no Slate PR). | If no longer used for invisible nodes.                              | [#](https://github.com/alineco/slate/commit/7b85973b4de1ce56bde4687049cf4f9c32e24e87) |
