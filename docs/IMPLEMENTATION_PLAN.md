# Implementation Plan: Hacker News AI Community Daily Report

## 1. Анализ требований
- Необходимо обработать данные из `fetchHackerNewsData()` для генерации отчета
- Формат должен соответствовать существующим промптам (trending, web)
- Поддержка локализации (en/zh)
- Структура отчета должна включать:
  - Сегодняшние тренды
  - Категоризацию новостей
  - Анализ сообщества

## 2. Архитектурные решения
- Создать функцию `buildHnReportPrompt()` аналогично `buildTrendingPrompt()`
- Использовать существующие типы данных из `hn.ts`
- Интегрировать с системой генерации отчетов через `prompts-data.ts`

## 3. Шаги реализации

### 3.1. Создание типа данных для HN отчета
```typescript
interface HnReportData {
  dateStr: string;
  stories: HNStory[];
  lang: Lang;
}
```

### 3.2. Реализация функции генерации промпта
```typescript
export function buildHnReportPrompt(data: HnReportData): string {
  // Логика генерации отчета аналогично buildTrendingPrompt
  // но с учетом специфики HN данных
}
```

### 3.3. Интеграция с существующей системой
- Добавить импорт в `prompts-data.ts`
- Обновить экспорты модуля
- Добавить тесты для новой функции

## 4. Пример структуры отчета
```markdown
## Hacker News AI Community Daily Report
**Date:** {dateStr}

### Today's Highlights
- {3-5 ключевых новостей}

### Top Stories by Category
- **Model Research**: {список}
- **Agent Infrastructure**: {список}
- **Industry News**: {список}

### Community Analysis
{анализ трендов и обсуждений}
```

## 5. Тестирование
- Проверка на реальных данных от HN API
- Валидация локализации
- Тестирование с разными объемами данных