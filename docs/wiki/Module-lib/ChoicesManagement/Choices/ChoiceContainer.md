## Table of contents

### Classes

- [ChoiceContainer](../wiki/Class-ChoiceContainer)

### Type aliases

- [ChoiceContainerConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructionoptions)
- [ChoiceContainerConstructor](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructor)
- [ContainerCreationCallback](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#containercreationcallback)

## Type aliases

### ChoiceContainerConstructionOptions

Ƭ **ChoiceContainerConstructionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choicesManager` | [ChoicesManager](../wiki/Class-ChoicesManager) |
| `containersCreation` | [ContainerCreationCallback](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#containercreationcallback)[] |
| `id` | `number` |
| `type` | `string` |

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:20](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L20)

___

### ChoiceContainerConstructor

Ƭ **ChoiceContainerConstructor**: (`constructionOptions`: [ChoiceContainerConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructionoptions), ...`buildArgs`: `any`[]) => [ChoiceContainer](../wiki/Class-ChoiceContainer)

#### Type declaration

• (`constructionOptions`, ...`buildArgs`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructionOptions` | [ChoiceContainerConstructionOptions](../wiki/Module-lib/ChoicesManagement/Choices/ChoiceContainer#choicecontainerconstructionoptions) |
| `...buildArgs` | `any`[] |

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:15](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L15)

___

### ContainerCreationCallback

Ƭ **ContainerCreationCallback**: (`type`: `string`, ...`args`: `any`[]) => `HTMLElement`

#### Type declaration

▸ (`type`, ...`args`): `HTMLElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `...args` | `any`[] |

##### Returns

`HTMLElement`

HTMLElement

#### Defined in

[lib/ChoicesManagement/Choices/ChoiceContainer.ts:13](https://github.com/P0ulpy/Configurateur-OakAddins/blob/af13efb/src/lib/ChoicesManagement/Choices/ChoiceContainer.ts#L13)
