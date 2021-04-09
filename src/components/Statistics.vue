<template>
	<div>
		<v-card
			max-width="600"
		>
			<v-card-text class="pt-0">
				<div class="title font-weight-light mb-2">
					Session Stats
				</div>
				<div>Score: {{$parent.totalCorrect}} / {{$parent.totalProblems}} ( {{$parent.score}}% )</div>
				<div>Total Time: {{$parent.totalTime}} seconds</div>
				<div>Average: {{$parent.averageTime}} seconds</div>
			</v-card-text>
		</v-card>
	</div>
</template>

							
						