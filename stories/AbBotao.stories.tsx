import React from "react";
import { AbBotao } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
   title: 'Pedro',
   component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Templete: ComponentStory<typeof AbBotao> => () => <AbBotao />

export const Primario = Templete.bind({})