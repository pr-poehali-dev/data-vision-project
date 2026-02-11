import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "17B параметров",
    description: "Мощная языковая модель с 17 миллиардами параметров, обученная на современных данных и оптимизированная для реальных задач.",
    icon: "brain",
    badge: "17B",
  },
  {
    title: "Transformer архитектура",
    description: "Основано на Encoder-Decoder архитектуре transformers — проверенной технологии для обработки языка.",
    icon: "zap",
    badge: "Transformers",
  },
  {
    title: "8-bit квантизация",
    description: "Оптимизированная 8-bit модель для быстрой работы без потери качества. Доступно даже на обычных устройствах.",
    icon: "globe",
    badge: "8-bit",
  },
  {
    title: "Telegram Bot",
    description: "Удобный доступ к ИИ через Telegram. Просто напишите @yappertar_ai_bot и начните общаться с нашей моделью.",
    icon: "link",
    badge: "Bot",
  },
  {
    title: "Создано GenAI",
    description: "Проект группы подростков, которые исследуют ИИ и создают собственные модели. Молодой взгляд на технологии.",
    icon: "target",
    badge: "GenAI",
  },
  {
    title: "Открытый доступ",
    description: "Попробуйте сейчас! Наша модель уже доступна в Telegram. Никаких ожиданий или регистраций.",
    icon: "lock",
    badge: "Доступно",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что умеет YAPPERTAR-ai</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мощная языковая модель, созданная молодыми исследователями ИИ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}