import type { IOpenAiData } from '@/models/Bussines/IOpenAiData';
import type { IFormData } from '@/modules/Business/models/IFormData';
import { usePrompt } from '@/modules/Business/composable/usePrompt';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import OpenAI from 'openai';

export const useBusinessStore = defineStore(
  'businessStore',
  () => {
    const OPENAI_API_KEY =
      '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';
    const { generatePrompt } = usePrompt();
    const openAiData = ref<IOpenAiData>();
    const isLoaded = ref(false);

    const fetchOpenAi = async (value: IFormData) => {
      const systemPrompt =
        'You are a helpful assistant designed to output JSON.';
      const userPrompt = generatePrompt(value);

      const openai = new OpenAI({
        organization: 'org-gMMLBDt8GYoH6XvDrRNR9dDS',
        project: 'proj_13bhHRRlUbgQnmsrdOEaVlAH',
        apiKey: OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      openAiData.value = undefined;
      isLoaded.value = true;

      const response = await openai.chat.completions.create({
        response_format: { type: 'json_object' },
        model: 'gpt-4-turbo',
        store: true,
        messages: [
          {
            content: systemPrompt,
            role: 'system',
          },
          {
            content: userPrompt,
            role: 'user',
          },
        ],
      });

      isLoaded.value = false;

      const content = response.choices[0].message.content;

      if (content) {
        openAiData.value = JSON.parse(content);
        console.log(JSON.parse(content));
      }
    };

    const resetOpenAiData = () => {
      openAiData.value = undefined;
    };

    return {
      resetOpenAiData,
      fetchOpenAi,
      openAiData,
      isLoaded,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['openAiData'],
    },
  },
);
