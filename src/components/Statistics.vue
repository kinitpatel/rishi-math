<template>
	<div>
			<v-list flat>
				<v-subheader class="title">STATISTICS</v-subheader>
				<v-list-item-group
					v-model="selectedItem"
					color="primary"
				>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="title">Score: {{$parent.totalCorrect}} / {{$parent.totalProblems}} ( {{$parent.score}}% )</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="title">Total Time: {{$parent.totalTime}} seconds</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="title">Average: {{$parent.averageTime}} seconds</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
	</div>
</template>

							
						