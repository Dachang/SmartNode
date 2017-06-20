<style media="screen" scoped lang="less">
  @import '../../../App.less';
  .day-cell{
    display: inline-block;
    width: calc(95% / 7 );
    border: 1px solid @pale-grey;
    height: 90px;
    margin: 2px 0;
    padding: 3px 5px;
    text-align: left;
  }
  .day-cell:not(.disabled){
    color: @black;
  }
  .datepicker {
      width: 100%;
  }
  .datepicker .wrapper {
      background: #fff;
      width: 100%;
  }

  .datepicker .panel:after {
      content: '.';
      display: block;
      visibility: hidden;
      height: 0;
      clear: both;
  }

  .datepicker h3 {
      text-align: center;
  }

  .datepicker span,{
      // display: inline-block;
      width: 100%/7;
      height: 30px;
      line-height: 30px;
      text-align: center;
      // float: left;
  }

  .datepicker span.disabled,
  .datepicker i.disabled,
  .datepicker em.disabled {
      color: #ddd;
  }

  .datepicker span.active,
  .datepicker i.active,
  .datepicker em.active:not(.disabled) {
      background: #1ba9ba;
      color: #fff;
  }

  .datepicker span.disabled:hover,
  .datepicker i.disabled:hover,
  .datepicker em.disabled:hover {
      color: #eee;
      background: none;
  }

  .datepicker span:hover,
  .datepicker i:hover,
  .datepicker em:hover {
      background: #eee;
  }
  div.disabled{
    color: @white-six
  }
  // div.active{
  //   background: @white-four;
  // }
  div.upcomming{
    background: @dodger-blue;
  }
  div[type=learned]:not(.disabled){
    border: 1px solid @dodger-blue;
    box-shadow: 0px 0px 0px 4px rgba(77, 161, 255, 0.07);
  }
  div[type=next]{
    border: 1px solid @dodger-blue;
    background: @dodger-blue;
    color: @white !important;
  }
  div[type=future]:not(.disabled){
    color: @warm-grey !important;
  }
  div[today]{
    background: @white-four !important;
  }

</style>

<template id="">

<div id="datepicker" class="datepicker">
    <div class="wrapper" v-show="show">
        <section class="panel day" v-if="type=='day'">
            <div class='flex justify-center'>
                <span @click="changeDay(true)"><Icon type="ios-arrow-left" size='30'></Icon></span>
                <span @click="">{{MONTH}}月 {{year}}</span>
                <span @click="changeDay()"><Icon type="ios-arrow-right" size='30' ></Icon></span>
            </div>
            <div class="flex justify-between">
                <span>星期一</span>
                <span>星期二</span>
                <span>星期三</span>
                <span>星期四</span>
                <span>星期五</span>
                <span>星期六</span>
                <span>星期天</span>
            </div>
            <div class="flex justify-between" style="flex-wrap:wrap;padding:2px;">
              <div class="day-cell" v-for="(item,index) in days" track-by="index"
              :class="{
                disabled:!item.flag,
                active:(item.day===day && item.flag),
                /*learned:lessons.find(e=>{return e.date === item.date})!==undefined && item.day - day < 0 && item.flag,*/
                /*upcomming:lessons.find(e=>{return e.date === item.date}) && item.day - day > 0*/
                }"
              :type="(_lessons[item.date]) ? _lessons[item.date].type : false"

              @click="setDay(item.day)">
                {{item.day}} {{day}}
                <p v-if="_lessons[item.date]!==undefined" >{{_lessons[item.date].name || ''}}</p>
              </div>
            </div>
            <!-- <span v-for="item in days" class="{{item.flag?'':'disabled'}} {{item.day-day==0?'active':''}}" track-by="$index" @click="setDay(item.day)">{{item.day}}</span> -->
        </section>
        <!-- <section class="panel month" v-if="type=='month'">
            <h3>
                <b @click="changeMonth(true)" class="yo-ico">《</b>
                <b @click="type='year',outYears()">{{year}}年</b>
                <b @click="changeMonth()" class="yo-ico">》</b>
            </h3>
            <em v-for="item in months" :class="{active:(item==month)}" track-by="$index" @click="type='day',setMonth(item)">{{item}}月</em>
        </section>
        <section class="panel year" v-if="type=='year'">
            <h3>
                <b @click="changeYear(true)" class="yo-ico">《</b>
                <b @click="">{{startYear}} - {{endYear}}</b>
                <b @click="changeYear()" class="yo-ico">》</b>
            </h3>
            <i v-for="item in years" :class="{active:(item == year)}" track-by="$index" @click="type='month',setYear(item)">{{item}}</i>
        </section> -->
    </div>
</div>

</template>

<script type="text/javascript">

var moment = require('moment');
moment.locale('zh-cn',{
  months : '一-二-三-四-五-六-七-八-九-十-十一-十二'.split('-'),
  week:{
    dow:1
  }
})
var format = 'YYYY-MM-D';
export default{
    name:'Calender',
    props:['lessons'],
    data () {
        // console.log(this.lessons);
        this.init = new Date('2017-06-19');
        var now = typeof this.init == 'object' ? moment(this.init) : moment(this.init, format);
        return {
            type:'day',
            days: [], //当月的天数集合
            months: [], //当年的月数集合
            years: [], //年的集合
            day: now.format('D'), //当前的天，2016-12-25中的25
            month: now.format('MM'), //当前的月，2016-12-25中的25
            MONTH: now.format('MMMM'),
            year: now.format('YYYY'), //当前的年，2016-12-25的2016
            startYear: '', //年的范围起始值
            endYear: '', //年的范围结束值
            show: true, //是否显示日历
            isEdit: false //是否在编辑中
        }
    },
    computed: {
        dateStr: function() {
            var str = moment([this.year, this.month, this.day].join('-'), format).format(format);
            if (this.isEdit) {
                this.init = str;
                this.isEdit = false;
            }
            return str
        },
    },
    methods: {
        lessonType (date,index){
          // console.log(this.lessons);
        },
        openInit: function() {
            var today = moment(this.init, format);
            this.year = today.format('YYYY');
            this.month = today.format('MM');
            this.day = today.format('D');
            this.show = true;
        },
        setDay: function(day) {
            this.day = day;
            // this.show = false;
            this.isEdit = true;
        },
        setMonth: function(month) {
            this.month = month;
        },
        setYear: function(year) {
            this.year = year;
        },
        getToday: function() {
            this.curDate = moment().format(format);
            return this.curDate
        },
        changeDay: function(isPre) {
            var today = moment(this.dateStr, format);
            today.subtract(isPre ? 1 : -1, 'month');
            this.MONTH = today.format('MMMM');
            today = today.format(format).split('-');
            this.year = today[0];
            this.month = today[1];
            this.day = today[2];
            this.outDays();
        },
        changeMonth: function(isPre) {
            var today = moment([this.year, this.month, this.day].join('-'), format);
            today.subtract(isPre ? 1 : -1, 'year');
            today = today.format(format).split('-');
            this.year = today[0];
            this.month = today[1];
            this.day = today[2];
            this.outMonths();
        },
        changeYear: function(isPre) {
            var today = moment([this.year, this.month, this.day].join('-'), format);
            today.subtract(isPre ? 12 : -12, 'year');
            today = today.format(format).split('-');
            this.year = today[0];
            this.month = today[1];
            this.day = today[2];
            this.outYears();
        },
        outDays: function() {
            var days = [];
            var curDate = [this.year, this.month, this.day].join('-');
            var end = moment(curDate, format).endOf('month').weekday(6).format(format);
            var flag = false,
                d,
                cur,
                date;
            for (var i = 0; i < 42; i++) {
                cur = moment(curDate).startOf('month').weekday(i);
                d = cur.format('D');
                date = cur.format('YYYY-MM-D');
                console.log(d * 1);
                if (d * 1 == 1) {
                    flag = !flag;
                }
                days.push({
                    day: d,
                    date,
                    flag
                });
                if (cur.format(format) == end) {
                    break;
                }
            }
            this.days = days;
        },
        outMonths: function() {
            var months = [];
            for (var i = 1; i < 13; i++) {
                months.push(i);
            }
            this.months = months;
        },
        outYears: function() {
            var year = this.year;
            var today = [year, this.month, this.day].join('-');
            var pre = moment(today, format).subtract(5, 'year').format('YYYY');
            var next = moment(today, format).subtract(-6, 'year').format('YYYY');
            var years = [];
            for (var i = pre * 1; i <= next * 1;) {
                years.push(i);
                i = i * 1 + 1;
            }
            this.startYear = pre;
            this.endYear = next;
            this.years = years;
        }
    },
    mounted: function() {
        let obj = {},
            hasNext = false;
        console.log('this.lessons',this.lessons);
        this.lessons.forEach(e=>{
          obj[e.date]={
            name:e.name,
            date:e.date,
            id:e.id,
          };
          if(new Date(e.date) < this.init){
            obj[e.date].type = 'learned';
          }else if(new Date(e.date) == this.init || ((new Date(e.date) > this.init) && !hasNext)){
            obj[e.date].type = 'next';
            hasNext = true;
          }else if(new Date(e.date) > this.init){
            obj[e.date].type = 'future';
          }else{
            console.warn("ERROR!,e.date:",e.date,"this.init",this.init);
          }
          delete obj[e.date].date;
        })
        if(obj[this.init]==undefined){
          obj[this.init]={
            type:'today'
          }
        }
        this._lessons = obj;
        console.log(obj);
        console.log(this.init);
        this.outDays();
    }
}

</script>
