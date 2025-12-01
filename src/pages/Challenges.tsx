import { Trophy, Target, Clock, Users, Code2, Zap } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: 'Desafio de Algoritmos',
      description: 'Resolva problemas de algoritmos e estruturas de dados para melhorar suas habilidades de programação.',
      difficulty: 'Intermediário',
      participants: 156,
      timeLimit: '2 horas',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Code Speed Challenge',
      description: 'Desenvolva uma aplicação web completa no menor tempo possível seguindo as especificações.',
      difficulty: 'Avançado',
      participants: 89,
      timeLimit: '4 horas',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Bug Hunt',
      description: 'Encontre e corrija o maior número de bugs em um código legado.',
      difficulty: 'Iniciante',
      participants: 234,
      timeLimit: '1 hora',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Avançado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
            Desafios de Programação
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Teste suas habilidades, aprenda novas técnicas e compita com outros desenvolvedores da comunidade
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-1">Desafios Ativos</p>
                <p className="text-2xl sm:text-3xl font-bold text-cyan-500">12</p>
              </div>
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-cyan-500" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-1">Participantes</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-500">479</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-1">Taxa de Conclusão</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-500">68%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${challenge.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${challenge.color} rounded-lg flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {challenge.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    {challenge.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{challenge.timeLimit}</span>
                    </div>
                  </div>

                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${challenge.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}>
                    Participar do Desafio
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para o próximo desafio?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Novos desafios são adicionados semanalmente. Mantenha-se atualizado e continue evoluindo suas habilidades!
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base">
            Ver Todos os Desafios
          </button>
        </div>
      </div>
    </div>
  );
}
